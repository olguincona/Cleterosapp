import React from "react";
import carro from "../Assets/carro.png";
import logo from "../Assets/pista.jpg";
import CartWidget from "./CartWidget";
import { Category } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}
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
                <div>
                    <nav className='felx justify-center items-center bg-black py-2 text-xl justify-between text-white'>
                        {categories.map((category) => <NavLink key={category.id} to={category.route} className='justify-between items-center' >{category.title}</NavLink>)}
                    </nav>
                    <Link to="/cart"><CartWidget  /></Link>
                </div> 
                <div>
                    <h1>Tienda online</h1>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
            </header>
        </>
        
    )
}


export default Navbar