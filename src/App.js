import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import FreshSardines from './FreshSardines';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/vending-machine" element={<VendingMachine />}/>
          <Route path="/" element={<VendingMachine />}/>
          <Route path="/soda" element={<Soda />}/>
          <Route path="/chips" element={<Chips />}/>
          <Route path="/freshsardines" element={<FreshSardines />}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
