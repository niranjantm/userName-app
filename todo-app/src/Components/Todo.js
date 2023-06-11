import React from 'react'
import { Fragment,useState } from 'react'
import TodoList from "./TodoList"

function Todo(props) {

    const [todo,setTodo] = useState("")

    const changeHandler=(event)=>{
       
        setTodo(event.target.value); 
    }
    
    const submitHandler=(event)=>{
        event.preventDefault();
        props.addTodo(todo);
        setTodo("")

    }
  return (
    
    <Fragment>
        <form onSubmit={submitHandler}>
            <input className='' type='text' name="text" onChange={changeHandler} value={todo}></input>
            <button type="submit">Add</button>
            
            
        </form>
        
        </Fragment>
  )
}

export default Todo