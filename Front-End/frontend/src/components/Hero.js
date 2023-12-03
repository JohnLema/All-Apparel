import React,{useState} from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom';
import Form from '../places/Form';
import { auth, provider } from "./../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Hero() {
  const [user, loading, error] = useAuthState(auth); //hook #1 check if my user is logged render the information
  return (
    <div>
      <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">


            {user && (<>
              <h1 className="text-5xl font-semibold">Welcome {user.displayName} </h1>
      
            </>)}
         
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              All Apparel
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Clothing made to fit every size and shape
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to='/Shop'
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Shop Now
              </Link>
              <Link to='/Form' className="text-sm font-semibold leading-6 text-gray-900">
                Sign in for rewards!  <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero;
