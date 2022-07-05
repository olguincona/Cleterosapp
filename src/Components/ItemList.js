import React from 'react'

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