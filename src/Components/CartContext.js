import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();
const { Provider } = CartContext;

const CustomProvider = ({ children }) => {
  const [products, setProducts] = useState([{name:'Marco'}, {price:150}, {quantity:10}]);

  const getQtyProducts = () => {
    setCantidad
  }

  const addProduct = (product) => {
    if (isinCart(product.id)){
      const aux = [...products];
      const found = aux.find(p => p.id === product.id);
      found.qty += product.qty;
      setProducts(aux);
  
    }else{
      setProducts([...products, product])
    }
    console.log("esta funcion agrega un Producto");
  }

  const removeProduct = (id) => {
    console.log("esta funcion elimina un Producto");
  }

  const clear = () => {
    console.log("esta funcion resetea la lista");
  }

  const isinCart = (id) => {
    products.some(product => product.id === id)
    console.log("esta funcion verifica si esta en la lista");
  }
  
  return (
    <Provider value={{products, addProduct, removeProduct, clear, getQtyProducts}}>
    {children}
    </Provider>
  )
}
 
export default CustomProvider