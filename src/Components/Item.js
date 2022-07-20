import React from 'react'

function Item({product}) {
  const {name, description, price} = product;
    return (
      <div>
        <h4>{name}</h4>
        <p>{description}</p> <p>{price}</p>
      </div>
    );
}


export default Item