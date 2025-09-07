import { useState, useEffect } from 'react';
import './App.css';
import ProductBan from './components/product_ban';
import 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home';


function App() {

 
  return (
    <div>
   <div className='header'>
        <h1>My Store</h1>
      
      </div>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        </div>
  );
}

export default App;
