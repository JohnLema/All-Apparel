import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './places/shop';
import Home from './places/home';
import About from './places/About';
import Contact from './places/Contact';
import Form from './places/Form';
import ProductDetail from './places/ProductDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Checkout from './places/Checkout';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <BrowserRouter >
        <Navbar/>
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route exact path="/shop" element={<Shop/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/form" element={<Form/>}/>
    <Route exact path="/productdetail" element={<ProductDetail/>}/>
    <Route path="/Checkout" element={<Checkout/>}/>
  </Routes>
  <App />
  <Footer/>

</BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
