import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const handleAddMealToCart = () => {
    // alert("added to cart");
    // console.log("added to cart");
    cartCtx.addItem(props.meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${props.meal.image}`}
          alt={props.meal.name}
        />
        <div>
          <h3>{props.meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(props.meal.price)}
          </p>
          <p className="meal-item-description">{props.meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
