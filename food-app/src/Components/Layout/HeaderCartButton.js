import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import { useContext ,useState,useEffect} from "react"
import InputContext from "../Store/inputContext"

const HeaderCartButton = (porps)=>{
    const ctx = useContext(InputContext);
    const[bumbBtn,setBumbBtn] = useState(false)

    const totalItems = ctx.cartItems.reduce((initial,item)=>{return(Number(initial+item.amount))},0)

    const btnClass = (`${classes.button} ${bumbBtn?classes.bump:""}`)
    useEffect(()=>{
        if(ctx.cartItems ===0){
            return
        }
        setBumbBtn(true)
        const timer = setTimeout(()=>{
            setBumbBtn(false)
        },300)
        return()=>{
            clearTimeout(timer)
        }
    },[ctx.cartItems])
    return(
       <button className={btnClass} onClick={porps.onClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{totalItems}</span>
        </button>
    )
}
export default HeaderCartButton