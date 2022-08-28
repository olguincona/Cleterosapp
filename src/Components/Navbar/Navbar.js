import React from "react";
import logo from "../../Assets/pista.jpg";
import CartWidget from "../CartWidget/CartWidget";
import { COLORS } from "../../constants/color";
import { Link, NavLink } from "react-router-dom";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

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
        <header style={styles.container}>
            <div style={styles.branchContainer}>
                <Link to="/"><img style={styles.logo} src={logo} alt="" /></Link>
                <h1 style={styles.title}>Mi tienda online</h1>
            </div>
            <div style={styles.links}>
                <nav>
                    {categories.map((category) => <NavLink key={category.id} style={styles.link} to={category.route}>{category.name}</NavLink>)}
                </nav>
                <Link to="/cart"><CartWidget /></Link>
            </div>
        </header >
    )

    /* return (
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
        
    ) */
}
const styles = {
    container: {
        display: viewport.width > 900 ? 'flex' : 'none',
        backgroundColor: COLORS.green,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    branchContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        fontSize: 25
    },
    links: {
        display: "flex"
    },
    link: {
        color: COLORS.black,
        fontSize: 16,
        padding: 20
    },
    logo: {
        height: 80
    }
};

export default Navbar