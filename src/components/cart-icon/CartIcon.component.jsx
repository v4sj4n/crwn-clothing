import { useContext } from "react"
import { CartContext } from "../../contexts/Cart.context"
import {CartIconContainer, ItemCount, ShoppingIcon} from "./CartIcon.styles"

const CartIcon = () => {
    const {setIsCartOpen, isCartOpen, cartCount} = useContext(CartContext)
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>

        </CartIconContainer>
    )
}

export default CartIcon