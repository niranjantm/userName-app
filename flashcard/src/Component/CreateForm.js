import React from 'react'
import { useRef ,useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { deckAction } from './store/FormReducer'
import classes from "./MainNav.module.css"

function CreateForm() {
    const deckState = useSelector((state)=>{return(state.deck)});
    const dispatch = useDispatch();
    const termNameRef = useRef();
    const termDesRef=useRef();
    const deckNameRef = useRef();
    const deckDesRef = useRef();
    const addMoreHandler=()=>{
      
        dispatch(deckAction.addTerm({termName:termNameRef.current.value,termDes:termDesRef.current.value}))
        console.log(deckState.terms)
       

    }
    const submitHandler=(event)=>{
        event.preventDefault()
        dispatch(deckAction.addDeck({deckName:deckNameRef.current.value,deckDes:deckDesRef.current.value}))
        console.log(deckState)
        console.log(deckNameRef.current.value)
        addMoreHandler()
    }
  return (
   <form onSubmit={submitHandler}>
    <div>
        <ul className={classes.list}>
        <li><label htmlFor='deckName'>Create group</label>
            <input type='text' name='deckName'id='deckName' ref={deckNameRef}></input></li>
        <li><label htmlFor='deckDes'>Add Description</label>
            <input type='text' name='deckDes'id='deckDes' ref={deckDesRef}></input></li>
        </ul>
    </div>
    <div>
        {deckState.terms.map((item)=>{
            return(
                <ul className={classes.list}>
                <li>
                <label htmlFor='termName'>Enter term</label>
                <input type='text' name='termName' id="termName" value={item.termName} ></input>
                </li>
                <li>
                <label htmlFor='termDes'>Enter defination</label>
                <input type='text' name='termDes' id="termDes" value={item.termDes}></input>
                </li>
            </ul>
            )
        })}
    </div>
    <div>
        <ul className={classes.list}>
            <li>
            <label htmlFor='termName'>Enter term</label>
            <input type='text' name='termName' id="termName" ref={termNameRef}></input>
            </li>
            <li>
            <label htmlFor='termDes'>Enter defination</label>
            <input type='text' name='termDes' id="termDes" ref={termDesRef}></input>
            </li>
        </ul>
        <button type="button" onClick={addMoreHandler}> Add More</button>
    </div>
    <button type="submit">Create</button>
   </form>
  )
}

export default CreateForm