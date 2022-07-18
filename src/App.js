import React from 'react';
import Navbar from './Components/Navbar.js';
import './App.css';
import ItemListContainer from './Components/ItemListContainer.js';
import CartWidget from './Components/CartWidget.js';
import Micomponente from './Components/Micomponente.js';
import ItemDetailContainer from './Components/ItemDetailContainer.js';
import Cart from './Components/Cart.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer valor="Hola"/>} />
          <Route path="/category/:categoryID" element={<ItemListContainer valor="Hola"/>} />
          <Route path="/item/itemID" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <ItemListContainer valor="Hola"/>
        <ItemDetailContainer /> */}
      </BrowserRouter>
  );
}

export default App;
