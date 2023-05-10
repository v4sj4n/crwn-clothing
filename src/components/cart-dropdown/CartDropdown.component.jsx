import { Button } from "../button/Button.component";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"/>
        <Button>GO TO CHECKOUT </Button>
    </div>
  );
};
export default CartDropdown;
