import { useContext } from "react";

import Button from "./UI/Button";
import logoImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumbersOfItems, items) => {
    return totalNumbersOfItems + items.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
