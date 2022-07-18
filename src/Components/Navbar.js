import React from "react";
import carro from '../Assets/carro.png';
import logo from '../Assets/pista.jpg'
import './Navbar.css'
import CartWidget from "./CartWidget";
import { Category } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const categories = [
        {id:0, title:'Marco', route:"/category/marcos"},
        {id:1, title:'Manillar', route:"/category/manillares"},
        {id:2, title:'Llanta', route:"/category/llantas"},
        {id:3, title:'Asiento', route:"/category/asientos"},
        {id:4, title:'Pedal', route:"/category/pedales"},
    ]

    return (
        <>
            <header>
                <div className="divfondo">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <h1>Tienda online</h1>
                </div>
                <div>
                    <nav>
                        {categories.map((category) => <NavLink key={category.id} to={category.route} >{category.title}</NavLink>)}
                    </nav>
                   <Link to="/cart"><CartWidget /></Link>
                </div> 
            </header>
        </>
        
    )
}


export default Navbar