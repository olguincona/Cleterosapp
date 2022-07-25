import React, {useContext} from 'react'
import {CartContext} from './CartContext'

const Cart = () => {
  const {products} = useContext(CartContext);
  if(products.length === 0){
  return(
    <h1>No hay productos, busca <Link to="/">aca</Link></h1>
    )
  }
  return (
    <>
      {products.map(product => <h1 key={product.id}>product.title</h1>)}
    </>
  )
}

export default Cart