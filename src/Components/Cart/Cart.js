import React, {useState,useContext} from 'react';
import { db } from '../../firebase/firebase';
import {doc, addDoc, collection, serverTimestamp, updateDoc} from 'firebase/firestore'

const Cart = () => {
  const [idVenta, setIdVenta] = useState("")

  const datosComprador = {
    nombre: 'Felipe',
    Apellido: 'Olguin',
    email: 'Felipeolguin@gmail.com'
  }

  const finalizarCompra = () => {
    const ventasCollection = collection(db, 'ventas');
    addDoc(ventasCollection, {
      datosComprador,
      items:[{nombre:"Marco", id:1},{nombre:"Manillar", id:2}],
      date: serverTimestamp(),
      total: 500,
    })
    .then((result) => {
      setIdVenta(result.id);
    });
    const updateCollection = doc(db, "productos", "9EodJKRWHzRumpxvmluU");
    updateDoc(updateCollection, {stock: 8})
  }
  return (
    <>
      <div>Cart</div>
      <button onClick={finalizarCompra}>Concretar Compra</button>
    </>
  )
}

export default Cart