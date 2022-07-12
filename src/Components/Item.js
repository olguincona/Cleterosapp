import React from 'react'

function Item({product}) {
  const {title, description, price} = product;
    return (
      <div>
        <h4>{title}</h4>
        <p>{description}</p> <p>{price}</p>
      </div>
    );
}


export default Item