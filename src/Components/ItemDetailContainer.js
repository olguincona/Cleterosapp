import React from 'react'

const product = [
                        {id:0, title:'Marco',
                         description: 'Cuadro de bicicleta', 
                         price: 150, 
                         pictureUrl:'foto'},
                    ]

const getItem = new Promise((res, rej)=>{
    setTimeout(() =>{
        res(product);
    }, 2000);
});

function ItemDetailContainer() {
  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer