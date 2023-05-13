import classes from "./MealItem.module.css"
import MealsForm from "./MealsForm"
export default function MealItem(props){
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
            <MealsForm></MealsForm>
        </div>
      </li>
    )
}