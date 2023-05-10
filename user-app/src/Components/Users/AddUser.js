import React, { useState } from "react";
import Card from "../UI/Card"
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


export default function AddUser(props){

    const [userName,setUserName] = useState("")
    const [userAge,setUserAge] = useState("")
    const [isValidName,setValidName] = useState(true)
    const [isValidAge,setValidAge] = useState(true)
    const [error,setError] = useState()
    

    const nameHandler = (event)=>{
        setUserName(event.target.value)
        setValidName(true)
       
    }
    const ageHandler = (event)=>{
        setUserAge(event.target.value)
        setValidAge(true)
       
    }
    const dismissHandler = ()=>{
        setError(false);
    }

    

    const submitHandler=(event)=>{
        event.preventDefault();
        if(userName.trim()==="" || userAge.trim() ===""){
            setValidName(false);
            setValidAge(false);
            setError({
                title:"Invalid input",
                message:"Add valid User Name and Age"
            })
            
            return
        }

        else if(userName.trim()===""){
            setValidName(false)
           
            return
        }
        else if(userAge.trim()===""){
            setValidAge(false)
            return
        }
         props.onUserAdd( {
            name:userName,
            age:userAge,
            id:Math.random()
           
        })
        setUserName("");
        setUserAge("")

    }
    return(
        <div>
        {error?<ErrorModal title ={error.title} message ={error.message}  type = "button" children = "Okay" ondismiss = {dismissHandler}></ErrorModal>:""}
        <Card className={classes.input}>
        <div>
            <form onSubmit={submitHandler}>
            <label htmlFor="userName">User Name</label>
            <input id = "userName" className={isValidName?classes.valid:classes.inValid} type = "text" onChange={nameHandler}value = {userName} ></input>
            <label htmlFor="userAge">User Age</label>
            <input id = "userAge" className={isValidAge?classes.valid:classes.inValid} type="number" min="0" onChange={ageHandler} value = {userAge}></input>
            <Button type ="submit"  className="button">Add User</Button>
            </form>
        </div>
        </Card>
       
        </div>
    )
}