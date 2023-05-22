import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux"

const Cart = (props) => {
  const cartItems = useSelector(state=>state.cartReducer.cartItems)
  console.log(cartItems)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item)=>{return(<CartItem item={item}
          
        />)})}

      </ul>
      <span className={classes.cartTotal}><h2 >Cart Total </h2></span><span className={classes.cartTotal}><h2>{cartItems.reduce((initial,item)=>{return(initial+(item.quantity*item.price))},0)}</h2></span>
    </Card>
  );
};

export default Cart;
