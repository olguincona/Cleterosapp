import React, { createContext } from 'react'

export const contexto = createContext([{name:'Marco'}, {price:150}, {quantity:10}]);
const CartContext = () => {
  return (
    <div>CartContext</div>
  )
}

export default CartContext