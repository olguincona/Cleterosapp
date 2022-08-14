import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext();
const { Provider } = CartContext;

const CustomProvider = ({ children }) => {
  const [products, setProducts] = useState([{name:'Marco'}, {price:150}, {quantity:10}]);

  const getQtyProducts = () => {
    let qty = 0;
    products.forEach(product => qty += product.qty);
    return qty;
  }

  const addProduct = (product) => {
    if (isinCart(product.id)){
      const aux = [...products];
      const found = aux.find(p => p.id === product.id);
      const index = products.indexOf(found);
      aux[index].qty += product.qty;
      setProducts(aux);
    }else{
      setProducts([...products, product])
    }
    getQtyProducts();
  }

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    getQtyProducts();
  };
  
  const isinCart = (id) => {
    return products.some(product => product.id === id)
  }
  const clear = () => {
    setProducts([]);
    getQtyProducts();
  }

  
  return (
    <Provider value={{products, addProduct, deleteProduct, clear, getQtyProducts}}>
    {children}
    </Provider>
  )
}
 
export default CustomProvider