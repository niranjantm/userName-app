import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cartButtonReducer";

const ProductItem = (props) => {
  // const { title, price, description,id } = props.items;
  const dispatch = useDispatch();
  const itemQuantity = useSelector((state) => {
    return state.cartReducer.itemQuantity;
  });

  const{title,id,description,price} = props.item

  const clickHandler = () => {
    dispatch(
      cartAction.addToCartHandler({ title,id, quantity:1,price })
    )
  };
  return (
 
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={clickHandler}>Add to Cart</button>
        </div>
        
      </Card>
    </li>
    
  );
};

export default ProductItem;
