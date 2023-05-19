import { useState } from 'react';
import classes from './Counter.module.css';
import {useSelector,useDispatch} from "react-redux";
import { counterActions } from '../components/store/CounterReducer';


const Counter = () => {
  
  const dispatch = useDispatch();
  const counter = useSelector(state=>{return(state.counter)})
  const show = useSelector(state=>state.showCounter)
  const [input,setInput] = useState(0);

  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };
  
  const inputChangeHandler = (event)=>{
    setInput(event.target.value)
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    dispatch(counterActions.userAdd(input))
    setInput('')
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div><button onClick={incrementHandler}>Increment</button>
     
      <button onClick={decrementHandler} >Decrement</button></div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <form onSubmit={submitHandler}>
        <input type='number' onChange={inputChangeHandler} value={input}></input>
        <button type="submit">add amount</button>
      </form>
    </main>
  );
};

export default Counter;
