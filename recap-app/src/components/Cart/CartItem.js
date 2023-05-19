import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import { cartAction } from '../store/cartButtonReducer';

const CartItem = (props) => {
  const { title, quantity, price ,id} = props.item;
  console.log(props.item)
  console.log(price)
  
  
  const dispatch = useDispatch();

  const addHandler = ()=>{
    dispatch(cartAction.itemAddHandler(id))
  }
  const removeHandler = ()=>{
    dispatch(cartAction.itemRemove(id));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price*quantity}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={addHandler}>+</button>
          <button onClick={removeHandler}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
