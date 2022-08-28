import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './Containers/ItemListConatiner/ItemListContainer';
import ItemDetailsContainer from './Containers/ItemDetailsConainer/ItemDetailsContainer';
import Cart from './Components/Cart/Cart';
import CartCustomProvider from './Context/CartContext';
import {BrowserRouter,Routes,Route} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <CartCustomProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer valor="Bienvenido al sitio"/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer valor="Bienvenido al sitio"/>} />
          <Route path="/item/:itemId" element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartCustomProvider>
    </BrowserRouter>
  );
}

export default App;
