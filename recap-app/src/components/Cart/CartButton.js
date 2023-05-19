import classes from "./CartButton.module.css";
import { cartAction } from "../store/cartButtonReducer";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const clickHandler = () => {
    dispatch(cartAction.validButtonHandler());
   
      
      
  };
  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>
        {cartItems.reduce((initial, item) => {
          return (item.quantity + initial);
        },0)}
      </span>
    </button>
  );
};

export default CartButton;
