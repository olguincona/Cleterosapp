import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const { getQtyProducts } = useContext(CartContext);
        return (
        <>
            <ShoppingCartIcon color="success" fontSize="large" />
            <p>{getQtyProducts}</p>
        </>
        
    )
}
    

export default CartWidget