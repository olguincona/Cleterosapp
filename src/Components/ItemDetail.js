import React from 'react'

function ItemDetail({product}) {
  return (
    <>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
    </>
  );
}

export default ItemDetail