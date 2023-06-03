import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import FlashcardDetail from './FlashcardDetail'
import {Link} from "react-router-dom"
import { displayAction } from '../Component/store/FormReducer2'

function MyFlashcards() {
  const decks = useSelector(state=>state.deck)
  const dispatch = useDispatch()
  
  
  
  return (
    <div  className="  grid grid-cols-3">
      {decks.map((deck,index)=>{
        
        return(
         <div className=" p-24 pt-5 flex flex-wrap items-center">
<div className='bg-white rounded-md w-72 h-44 mt-10 flex flex-col relative shadow-lg  '>
              <div className='  w-full flex justify-start'>
              <img className='rounded-full w-12' src={deck.deckImg} alt={""}></img>
              <p className='text-lg m-3 font-bold'>{deck.deckName}</p>
              <span className='m-3'>{`${deck.terms.length} ${deck.terms.length>1?"cards":"card"}`}</span>
              </div>
            <div className=' h-20 flex justify-center overflow-auto'>
            <p className='flex flex-wrap'>{deck.deckDes}</p>
            </div>
            <div className='flex justify-center static '>
            <button className='text-red-600 border border-red-600 absolute bottom-1 p-1 hover:text-white hover:bg-red-600'  onClick={()=>{dispatch(displayAction.flashDisplay(index))}}><Link to={"/flashcardDetail"}>view card</Link></button>
            </div>
            
            
            </div>
         </div>
            
          
          
        )
      })}
    </div>
  )
}

export default MyFlashcards