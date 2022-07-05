import React, { useState } from 'react'

const ItemCount = ({ stock, initial }) => {
    const [cuenta, setCuenta] = useState(initial)
    const sumar = () => {
        if (cuenta < stock){
            setCuenta(cuenta + 1)
        }
        if (cuenta >= stock){
        alert("No se puede agregar mas")
        //cuenta < stock && setCuenta (cuenta + 1)
        //cuenta >= stock && alert ("No se puede agregar mas")
         }
        }
    const restar =() => {
        if (cuenta > initial){
            setCuenta(cuenta - 1)}
        }
    const onAdd = () => {
        alert(`Gracias, compraste ${cuenta} productos`)
    }

  return (
    <>
        <div className='flex bg-gray-200 w-20 py-6 px-10'>
            <button onClick={restar}>-</button>
            <p>{cuenta}</p>
            <button onClick={sumar}>+</button>
            <button onClick={onAdd}>Comprar</button>
        </div>
    </>
    
  )
}


export default ItemCount