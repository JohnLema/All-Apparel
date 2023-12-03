import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from 'react-use-cart';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './places/Shop';
import Home from './places/Home';
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

  <CartProvider>
    <BrowserRouter basename = "/" >
        <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route exact path="/Shop" element={<Shop/>}/>
    <Route exact path="/About" element={<About/>}/>
    <Route exact path="/Contact" element={<Contact/>}/>
    <Route exact path="/Form" element={<Form/>}/>
    <Route exact path="/Productdetail" element={<ProductDetail/>}/>
    <Route path="/Checkout" element={<Checkout/>}/>
  </Routes>
  <App />
  <Footer/>

</BrowserRouter>
</CartProvider>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
