import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import InputContext from "../Store/inputContext";

export default function Cart(props) {
  const ctx = useContext(InputContext);

  const removeSingleItemHandler=(event)=>{
    event.preventDefault();
    ctx.onItemRemove(event.target.value)
    console.log(event.target.value)

  }

  const cartItems = ctx.cartItems.map((item) => {
    return (
      <li className={classes.item}>
        <span><h1>{item.name}</h1></span>
        <span><h1>{item.amount}</h1></span>
        <span><h1>{`$${(item.price*item.amount).toFixed(2)}`}</h1></span>
        <button onClick={removeSingleItemHandler} value={item.id}>-</button>
      </li>
    );
  });

  const checkoutDisable = ctx.cartItems.length>0
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>


      <div className={classes.total}>
        <span>{ctx.cartItems.length==0?"Your Cart Is Empty":"Total"}</span>
        <span>
          {(ctx.cartItems.reduce((intial, item) => {
            return Number(item.price) * Number(item.amount) + intial;
          }, 0)).toFixed(2)}
        </span>
      </div>
      <div className={classes.action}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
        <button disabled={!checkoutDisable} className={classes.button}>Checkout</button>
      </div>
    </Modal>
  );
}
