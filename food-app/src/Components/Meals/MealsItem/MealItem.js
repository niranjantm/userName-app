import classes from "./MealItem.module.css"
import MealsForm from "./MealsForm"
import { useContext } from "react"
import InputContext from "../../Store/inputContext"

export default function MealItem(props){

  const ctx = useContext(InputContext);

  const submitItemHandler = (amount)=>{
    console.log(typeof +amount)
      ctx.onaddItem({name:props.name,price:+(props.price),description:props.description,amount:+amount, id:props.id})
  }
    return(
      <li  className={classes.meal}>
        <div>
            {props.name}
        </div>
        <div className={classes.description}>
        {props.description}
        </div>
        <div className={classes.price}>
           {`$${props.price}`}
        </div>
        <div>
            <MealsForm onSubmit = {submitItemHandler}></MealsForm>
        </div>
      </li>
    )
}