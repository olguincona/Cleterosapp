import React from 'react';
import Navbar from './Components/Navbar.js';
import './App.css';
import ItemListContainer from './Components/ItemListContainer.js';
import CartWidget from './Components/CartWidget.js';
import Micomponente from './Components/Micomponente.js';
import ItemDetailContainer from './Components/ItemDetailContainer.js';
import Cart from './Components/Cart.js';
import CustomProvider from './Components/CartContext.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CartContext } from './Components/CartContext.js';


function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer valor="Hola"/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer valor="Hola"/>} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </CustomProvider>
      </BrowserRouter>
  );
}

export default App;
