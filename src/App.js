import './App.css';
import React from 'react';
import Login from './components/Login';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Clients from './components/Clients';
import About from './components/About';
import Wishlist from './components/Wishlist';
import Products from './components/Products';

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="/clients" element = {<Clients />} />
        <Route path="/about" element = {<About />} />
        <Route path="/wishlist" element = {<Wishlist />} />
        <Route path="/products" element = {<Products />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;