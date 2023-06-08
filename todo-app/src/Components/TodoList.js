import React from 'react'
import { Fragment } from 'react'

function TodoList(props) {
    
  return (
    <div>
        
        {props.todos.map((item,index)=>{
            console.log(item)
            return(
                <Fragment>
                    <h1>{item}</h1>
                    <button type="button" onClick={()=>{props.deleteTodo(index)}}>Delete</button>
                </Fragment>
                
                
            )
        })}
    </div>
  )
}

export default TodoList