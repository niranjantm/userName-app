import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input"
export default function MealsForm(){
    return(
        <form className={classes.form}>
            <Input input = {{type:"number",min:1,max:5,step:1,defaultValue:1,id:"A1",}} label ="Amount"></Input>
            <button  type = "submit">Add to cart</button>
        </form>
    )
}