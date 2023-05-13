import { Button } from '../button/Button.component'
import CartItem from '../cart-item/CartItem.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Cart.context'
import { useNavigate } from 'react-router-dom'

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        {}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT </Button>
    </CartDropdownContainer>
  )
}
export default CartDropdown
