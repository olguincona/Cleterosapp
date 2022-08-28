import React from 'react'

const MiComponente = () => {

    const manejarClick = (event) => {
       console.log("click en boton");
       event.stopPropagation();
    }

    const manejarCambio = (event) => {
        console.dir(event.target);
    }

    const prevenido = (event) => {
        console.log("prevenido");
        event.preventDefault()
    }

    const manejarClickDiv = () => {
        console.log("click en div");
    }

    return (
        <div onClick={manejarClickDiv}>
            <button id="button" onClick={manejarClick}>Click</button>
            <input type="text" onKeyDown={prevenido} onChange={manejarCambio}/>
            <a onClick={prevenido} href='http://google.com'>Ir a google</a>
        </div>
    );
}

export default MiComponente