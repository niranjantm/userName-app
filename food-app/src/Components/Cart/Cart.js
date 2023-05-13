import classes from "./Cart.module.css"
import Modal from "../UI/Modal"
export default function Cart(props){
    const cartItems = [{name:"shushi",price:"10.99",amount:2,id:"a1"}].map((item)=>{
        return(<li><h1>{item.name}</h1></li>)
    })
    return(
       <Modal onClose = {props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
            <span>Total</span>
            <span>10.99</span>
            </div>
            <div className={classes.action}>
            <button className={classes["button--alt"] } onClick={props.onClose}>close</button>
            <button className={classes.button}>Checkout</button>
            </div>
            </Modal>
    )
}