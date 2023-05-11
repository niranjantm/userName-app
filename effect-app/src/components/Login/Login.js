import React, {  useEffect, useReducer ,useContext} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../Auth-context";

const Reducer = (state, action) => {
  if (action.type === "emailInput") {
    return {
      enteredEmail: action.val,
      emailValid: action.val.includes("@"),
      passwordEntered: state.passwordEntered,
      passwordValid: state.passwordValid,
      formValid: state.formValid
       };
  }
  if (action.type ==="passwordInput"){
    return(
      {passwordEntered: action.val,
      passwordValid: action.val.trim().length>7,
      enteredEmail: state.enteredEmail,
       emailValid: state.emailValid,
       formValid: state.formValid }
   
    )
  }
  else if(action.type ==="emailBlur"){
    return ({ enteredEmail: state.enteredEmail, emailValid: false ,
      passwordEntered: state.passwordEntered,
      passwordValid: state.passwordValid,
      formValid: state.formValid});
  }
  else if(action.type ==="passBlur"){
    return ({ enteredEmail: state.enteredEmail, emailValid: state.emailValid ,
      passwordEntered: state.passwordEntered,
      passwordValid: false,
      formValid: state.formValid});
  }
  else if(action.type ==="formSubmit"){
    return({ enteredEmail: state.enteredEmail, emailValid: state.emailValid ,
      passwordEntered: state.passwordEntered,
      passwordValid: state.passwordValid,
      formValid: state.passwordValid && state.emailValid}

    )
  }
  return { enteredEmail: state.enteredEmail, emailValid: state.emailValid ,
    passwordEntered: state.passwordEntered,
    passwordValid: state.passwordValid,
    formValid: state.formValid};
};

const Login = (props) => {
  const ctx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [formIsValid, setFormIsValid] = useState(false);
  const [input, disspatchEmail] = useReducer(Reducer, {
    enteredEmail: "",
    emailValid: null,
    passwordEntered: "",
    passwordValid: null,
    formValid:null
  });

  const emailChangeHandler = (event) => {
    disspatchEmail({ type: "emailInput", val: event.target.value });
  };
 
  useEffect(() => {
    const timeHandler = setTimeout(() => {
      console.log("checking  validity");
      disspatchEmail({type:"formSubmit"})
    }, 1000);

    return () => {
      console.log("Clean up");
      clearTimeout(timeHandler);
    };
  }, [input.emailValid, input.passwordValid]);

  const passwordChangeHandler = (event) => {
    disspatchEmail({type:"passwordInput",val:event.target.value});
  };

  const validateEmailHandler = ()=>{
    if(!input.emailValid)
    disspatchEmail({type:"emailBlur"})
  }
  const validatePasswordHandler=()=>{
    if(!input.passwordValid)
    disspatchEmail({type:"passBlur"})
  }

  

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(input.enteredEmail, input.passwordEntered);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            input.emailValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="input">E-Mail</label>
          <input
            type="input"
            id="input"
            value={input.enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            input.passwordValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={input.passwordEntered}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!input.formValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
