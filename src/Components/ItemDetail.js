import React from 'react'
import ItemCount from './ItemCount';

function ItemDetail({product}) {
  return (
    <>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <ItemCount />
    </>
  );
}

export default ItemDetail