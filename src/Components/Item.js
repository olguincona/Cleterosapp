import React from 'react'

const promesa = new Promise((res, rej)=>{
    setTimeout(() =>{
        res(productos);
    }, 2000);
});

function Item() {
  return (
    <div>Item</div>
  )
}

export default Item