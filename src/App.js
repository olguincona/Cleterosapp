import React from 'react';
import Navbar from './Components/Navbar.js';
import './App.css';
import ItemListContainer from './Components/ItemListContainer.js';
import CartWidget from './Components/CartWidget.js';
const App = () => {
  return (
    <>
      <Navbar />,
      <ItemListContainer valor="Hola"/>
    </>
    
  );
}

export default App;
