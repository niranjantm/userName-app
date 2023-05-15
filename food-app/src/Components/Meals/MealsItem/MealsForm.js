import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef } from "react";

export default function MealsForm(props) {
  const Ref = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(Ref.current.value);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        input={{
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
          id: "A1",
        }}
        label="Amount"
        ref={Ref}
      ></Input>
      <button type="submit">Add to cart</button>
    </form>
  );
}
