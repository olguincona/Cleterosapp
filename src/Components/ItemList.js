import React from "react";
import Item from "./Item";

const styles = {
  container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
    flexWrap: "wrap",
  }
}

const ItemList = ({ items }) => {
  return (
    <div style={styles.container}>
      {items.map((product) => (
      <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;