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
   <form onSubmit={submitHandler} className="flex flex-col">
    <div className='bg-white mx-28 rounded-md py-16 mt-10 shadow-lg'>
        <ul className="flex flex-col space-x-5">
        <li className='flex flex-col px-10'><label htmlFor='deckName'>Create group</label>
            <input type='text' name='deckName'id='deckName' ref={deckNameRef} className="bg-gray-50 border border-gray-300 rounded-lg w-96 my-3 "></input></li>
            <li className='flex flex-col px-5'><label htmlFor='deckDes'>Add Description</label>
            <textarea  type="text" name='deckDes'id='deckDes' ref={deckDesRef} className="bg-gray-50 border border-gray-300 rounded-lg  my-3"></textarea></li>
            </ul>
            </div>
               
  
    <div>
        
    </div>
    
    <div className='bg-white mx-28 rounded-md py-16 mt-5 shadow-lg'>
    {deckState.terms.map((item)=>{
            return(
                <ul className="flex space-x-5">
                <li className='flex flex-col px-10'>
                <label htmlFor='termName'>Enter term</label>
                <input type='text' name='termName' id="termName" className="bg-gray-50 border border-gray-300 rounded-lg w-96 my-3" value={item.termName} ></input>
                </li>
                <li className='flex flex-col px-10'>
                <label htmlFor='termDes'>Enter defination</label>
                <textarea type='text' name='termDes' id="termDes" value={item.termDes} className="bg-gray-50 border border-gray-300 rounded-lg w-96 my-3"></textarea>
                </li>
            </ul>
            )
        })}
        <ul className="flex space-x-5 ">
            <li className='flex flex-col px-10'>
            <label htmlFor='termName'>Enter term</label>
            <input type='text' name='termName' id="termName" ref={termNameRef} className="bg-gray-50 border border-gray-300 rounded-lg w-96 my-3"></input>
            </li>
            <li className='flex flex-col px-10'>
            <label htmlFor='termDes'>Enter defination</label>
            <textarea type='text' name='termDes' id="termDes"  ref={termDesRef} className="bg-gray-50 border border-gray-300 rounded-lg w-96 my-3"></textarea>
            </li>
        </ul>
        <button type="button" className=" px-3 mx-10 rounded-md text-md text-blue-500" onClick={addMoreHandler}> Add More +</button>
    </div>
        <div className='flex flex-col items-center justify-center ' >
        <button type="submit" className='bg-red-600 px-4 rounded-md w-20 '>Create</button>
        </div>
    
   </form>
  )
}

export default CreateForm