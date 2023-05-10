import React, { useState ,useRef} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


export default function AddUser(props) {
  
  

  const [error, setError] = useState();
  const enteredName =useRef();
  const enteredAge =useRef();


  
 
  const dismissHandler = () => {
    setError(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.current.value.trim() === "" || enteredAge.current.value.trim() === "") {
     
      setError({
        title: "Invalid input",
        message: "Add valid User Name and Age",
      });

      return;
    } 
    props.onUserAdd({
      name: enteredName.current.value,
      age: enteredAge.current.value,
      id: Math.random(),
    });
    enteredAge.current.value=""
    enteredName.current.value=""

    
  };
  return (
    <React.Fragment>
      {error ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          type="button"
          children="Okay"
          ondismiss={dismissHandler}
        ></ErrorModal>
      ) : (
        ""
      )}
      <Card className={classes.input}>
        <div>
          <form onSubmit={submitHandler}>
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
             
              type="text"
             
              ref={enteredName}
            ></input>
            <label htmlFor="userAge">User Age</label>
            <input
              id="userAge"
             
              type="number"
              min="0"
             
              ref={enteredAge}
            ></input>
            <Button type="submit" className="button">
              Add User
            </Button>
          </form>
        </div>
      </Card>
    </React.Fragment>
  );
}
