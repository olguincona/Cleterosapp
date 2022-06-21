import React from "react";
import carro from '../Assets/carro.png';
import logo from '../Assets/pista.jpg'
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <img src={logo} alt="" />
            <h1>Tienda online</h1>
            <nav>
                <a href="">Categoria 1</a>
                <a href="">Categoria 2</a>
                <a href="">Categoria 3</a>
                <a href="">Categoria 4</a>
            </nav>
            <img src={carro} alt="" />
        </header>
    )
}

export default Navbar