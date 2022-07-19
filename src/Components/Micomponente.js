import React from 'react'

const Micomponente = () => {

  const manejarClick = (event) => {
    console.dir(event.target);
    const button = document.getElementById('button');
    console.log(event.target === button);
  }

  const manejarCambio = (event) => {
    console.dir(event.target);
  }

  return (
    <div>
      <button onClick={manejarClick}>Click</button>
      <input type="text" onChange={manejarCambio}></input>
    </div>
  );
}

export default Micomponente