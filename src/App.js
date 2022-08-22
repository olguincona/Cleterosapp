import React from 'react';
import Navbar from './Components/Navbar.js';
import './App.css';
import ItemListContainer from './Components/ItemListContainer.js';
import ItemDetailContainer from './Components/ItemDetailContainer.js';
import Cart from './Components/Cart.js';
import CartCustomProvider from './Components/CartContext.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <CartCustomProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer valor="Bienvenido al sitio"/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer valor="Bienvenido al sitio"/>} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartCustomProvider>
    </BrowserRouter>
  );
}

export default App;
