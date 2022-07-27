import React, {useContext} from 'react';
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';
import { db } from '../firebase/firebase';
import {doc, addDoc, collection, serverTimestamp, updateDoc} from 'firebase/firestore';
import {ThemeContext} from '@emotio/react';
import { useState } from 'react';

const Cart = () => {
  const {products} = useContext(CartContext);
  const [idVenta, setIdVenta] = useState("")

  const datosComprador = {
    nombre: 'Juan',
    Apellido: 'Perez',
    email: 'Juanperez@gmail.com'
  }

  const finalizarCompra = () => {
    console.log('Finalizar Compra');
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      datosComprador,
      items:[{nombre:"papa", id:1},{nombre:"batata", id:2}],
      date: serverTimestamp(),
      total: 500,
    })
    .then((result) => {
      setIdVenta(result.id);
    });
    const updateCollection = doc(db, "productos", "9EodJKRWHzRumpxvmluU");
    updateDoc(updateCollection, {stock: 8})
  }
  return(
    <>
      {products.length === 0
        ?
        <h1>No hay productos, busca <Link to="/">aca</Link></h1>
        : <>{products.map(product => <h1 key={product.id}>{product.title}</h1>)}
        <button onClick={finalizarcompra}>Finalizar</button>
        </>
      }
    </>
  )
}
  /* if(products.length === 0){
  return(
    <h1>No hay productos, busca <Link to="/">aca</Link></h1>
    )
  }
  return (
    <>
      {products.map(product => <h1 key={product.id}>product.title</h1>)}
    </>
  ) */


export default Cart