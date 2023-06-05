import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useState} from "react"
function FlashcardDetail() {

const decks =useSelector(state=>state.deck)
const index = useSelector(state=>state.display)
const [termIndex,setTermIndex] = useState(0);
console.log("index:----",index)
  return (
    <div>
    <div className='bg-yellow-400'>
       <p className='text-xl'>Flashcard Detail</p>
      <p className='text-2xl m-5 font-bold' >
        {decks[index.index].deckName}
      </p>
      <p className='ml-24 mr-24'>
        {decks[index.index].deckDes}
      </p>
    </div>
    <div className='flex flex-col items-center' >
     
      <div className='grid grid-cols-3 w-4/5  bg-red-400  '>
        <div className='bg-white flex flex-col items-center w-1/4 '>
          <p>Flashcards</p>
          <hr className='border border-black w-20 '></hr>
          {decks[index.index].terms.map((item,index)=>{
            return(
              <div>
                <button type="button" className='' onClick={()=>setTermIndex(index)}>{item.term}</button>
              </div>
             
            )
          })}
          
         
          
        </div>
        <div className='bg-white w-full grid grid-cols-2 gap-2'>
            <img src={decks[index.index].terms[termIndex].image}></img>
            <p>{decks[index.index].terms[termIndex].definition}</p>
            <button>right</button>
            <button>left</button>
          </div>
         
      </div>
     
    </div>
    </div>
  )
}

export default FlashcardDetail