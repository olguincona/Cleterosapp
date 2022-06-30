import React from "react";
import ItemCount from "./ItemCount";
const ItemListContainer = ({valor}) => (
    <>
        <div>
            <h1 href="#" style={{color:"black"}}>{valor}</h1>
        </div>
        <ItemCount stock={6}/>
    </>
)

export default ItemListContainer