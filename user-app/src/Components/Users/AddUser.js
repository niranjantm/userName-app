import React from "react";
import Card from "../UI/Card"
import classes from "./AddUser.module.css"
export default function AddUser(){
    const submitHandler=(event)=>{
        event.preventDefault();
    }
    return(
        <Card className={classes.input}>
        <div>
            <form onSubmit={submitHandler}>
            <label htmlFor="userName">User Name</label>
            <input id = "userName" type = "text"></input>
            <label htmlFor="userAge">User Age</label>
            <input id = "userAge" type="number" min="0"></input>
            <button type ="submit">Submit</button>
            </form>
        </div>
        </Card>
    )
}