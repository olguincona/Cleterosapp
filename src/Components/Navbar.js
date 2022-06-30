import React from "react";
import carro from '../Assets/carro.png';
import logo from '../Assets/pista.jpg'
import './Navbar.css'
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="divfondo">
                    <img src={logo} alt="" />
                    <h1>Tienda online</h1>
                    <ul>
                        <li href="">Categoria 1</li>
                        <li href="">Categoria 2</li>
                        <li href="">Categoria 3</li>
                        <li href="">Categoria 4</li>
                    </ul>
                    <CartWidget />
                </div>  
            </nav>
        </>
        
    )
}


export default Navbar