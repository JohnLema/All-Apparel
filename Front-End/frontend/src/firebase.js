// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  reload,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { v4 } from "uuid";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRo-SMo5JDu34W6j9t8ABZOyGbBcAYH0A",
    authDomain: "allaparrel.firebaseapp.com",
    projectId: "allaparrel",
    storageBucket: "allaparrel.appspot.com",
    messagingSenderId: "275105826694",
    appId: "1:275105826694:web:5225a554d477411d3fce07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
const popUp = signInWithPopup();
const storage = getStorage(app);
const db = getFirestore(app);
export {  auth, popUp, db };

//custom Hook

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

//storage

export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + v4());
  setLoading(true);
  await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);
  updateProfile(currentUser, { photoURL });

  setLoading(false);
  window.location.reload();

  // alert("File Uploaded!!!")
}