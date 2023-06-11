import React from "react";
import { Fragment, useState } from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";

function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((pre) => [...pre, todo]);
    console.log("State---->", todos);
  };
  const deleteTodo = (index) => {
    console.log("index--->", index);
    let count = 0;
    const updatedArray = todos.filter((item) => {
      if (index == count) {
        count++;
      } else {
        count++;
        return item;
      }
    });

    setTodos((prev) => updatedArray);
  };
  

  return (
    <Fragment>
      <div>Todos</div>
      <Todo addTodo={addTodo}></Todo>
      <TodoList todos={todos} deleteTodo={deleteTodo} ></TodoList>
    </Fragment>
  );
}

export default Todos;
