import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import FreshSardines from './FreshSardines';


// For this assignment, you should use the React Router to build a vending machine! Make sure you install the React Router:

// $ npm install react-router-dom
// What does this mean? Your application should consist of the following:

// A VendingMachine component, which shows a page with a list of snacks that you can get from the vending machine.
// At least three different snack components, each one corresponding to a vending machine snack.
// By clicking on an item in the VendingMachine you can view one of things inside of the machine. Clicking should update the URL and show the snack that you’ve clicked on.
// From each snack component, you should be able to go back to the main VendingMachine component.

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/vending-machine" element={<VendingMachine />}/>
          <Route exact path="/" element={<VendingMachine />}/>
          <Route exact path="/soda" element={<Soda />}/>
          <Route exact path="/chips" element={<Chips />}/>
          <Route exact path="/freshsardines" element={<FreshSardines />}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
