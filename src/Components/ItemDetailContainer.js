import React, { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail";

const product = [
   {id:6, 
    name:"Marco",
    description: "Cuadro de bicicleta", 
    price: 150, 
    pictureUrl:"foto"
  },
];

const getItem = new Promise((res, rej)=>{
    setTimeout(() =>{
        res(product);
    }, 2000);
});

function ItemDetailContainer() {
  const [product, setProducts] =useState ([]);
  useEffect(() => {
    getItem
      .then((res) => {
        setProducts(res.find((product)=>product.id == id));
        })
        .catch((error) => console.log(error));
  }, []);
  return <ItemDetail product={product}/>;
}

export default ItemDetailContainer;