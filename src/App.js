import React from 'react';
import Navbar from './Components/Navbar.js';
import './App.css';
import ItemListContainer from './Components/ItemListContainer.jsx';
import CartWidget from './Components/CartWidget.jsx';
const App = () => {
  return (
    <Navbar />,
    <ItemListContainer valor={'Hola'}/>
  );
}

export default App;
