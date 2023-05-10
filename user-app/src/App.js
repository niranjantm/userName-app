import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";


export default function App(){

  const [usersData,setData] = useState([])

  const userAddHandler =(user)=>{
    setData(preState =>{return [...preState,user]})
  }
  return(
    <div>
    <AddUser onUserAdd = {userAddHandler}></AddUser>
    <UserList userItems ={usersData} ></UserList>
    </div>
  )
}