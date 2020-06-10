import React from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './shop-items.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <h1>Rate List</h1>
      <br/>
      <Shop item="Basmati Rice" price="200"/>
      <Shop item="Daal Chana" price="100"/>
      <Shop item="Chicken" price="350"/>
      <Shop item="Boneless Chicken" price="450"/>
     
    </div>
  );
}

export default App;
