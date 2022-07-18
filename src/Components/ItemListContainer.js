import { SyncProblemSharp } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { logRoles } from "@testing-library/react";

export const ItemListContainer = ({valor}) => {
    const resultado = useParams();
    console.log(resultado);
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);

       

    useEffect(() => {
        const URL = categoryID
            ? `https://fakestoreapi.com/products/category/${categoryID}`
            : 'https://fakestoreapi.com/products'; 
        fetch(URL)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoaded(false))
    }, [categoryName]);
    return (
        <>
            <h1>{valor}</h1>
            {loaded ? <CircularProgress color="success" /> : <ItemList items={products} />}
        </>
    )
    }

/* const productos = [
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

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        promesa
        .then((data)=>{
           console.log(data);
           setProducts(data); 
        })
        .catch(() => {
            console.log("Algo salio mal");
        });
    }, []);
    return (
        <>
            <ItemList items={products} />
        </>
    );
}; */

export default ItemListContainer;