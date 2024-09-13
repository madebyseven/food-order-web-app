import { useContext } from "react";

import Button from "./UI/Button";
import logoImg from "../assets/logo.jpg";
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/CartContext";

const Header = () => {
  // update the cart counter order button in header
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumbersOfItems, items) => {
    return totalNumbersOfItems + items.quantity;
  }, 0);

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
