import { SyncProblemSharp } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productos = [
    {id:0, title:'Marco', description: 'Cuadro de bicicleta', price: 150, pictureUrl:'foto'},
    {id:1, title:'Manillar', description: 'Manillar de bicicleta', price: 120, pictureUrl:'foto'},
    {id:2, title:'Llanta', description: 'Llanta de bicicleta', price: 100, pictureUrl:'foto'},
    {id:3, title:'Asiento', description: 'Asiento de bicicleta', price: 50, pictureUrl:'foto'},
    {id:4, title:'Pedal', description: 'Pedales de bicicleta', price: 40, pictureUrl:'foto'},
]

const promesa = new Promise((res, rej)=>{
    setTimeout(() =>{
        res(productos);
    }, 2000);
});

const ItemListContainer = ({valor}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        promesa.then((data)=>{
           console.log(data);
           setProducts(data); 
        }).catch(() => {
            console.log('Algo salio mal')
        })
        
    }, []);

    const onAdd = (count) => {
        console.log('Hola quiero ' + count + ' unidades de este producto')
    }
    return (
        <>
            <div>
                <h1 href="#" style={{color:"black"}}>{valor}</h1>
            </div>
            <ItemCount stock={6} initial = {1} onAdd={onAdd}/>
            {products.map((product) => <div key={product.id}>{product.title}</div>)}
        </>
    )
}

export default ItemListContainer