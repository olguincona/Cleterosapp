import React from "react";
import Item from "./Item";

function ItemList({items}) {
  return (
    <>
      {items.map((product) =>(
       <Item key={product.id} product={product} />
    ))}
    </>
  );
}

export default ItemList;