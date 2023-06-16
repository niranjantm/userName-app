import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useState,useRef} from "react"


function FlashcardDetail() {

const decks =useSelector(state=>state.deck)
const index = useSelector(state=>state.display)
const [termIndex,setTermIndex] = useState(0);
const sliderRef = useRef()
console.log("index:----",index)
let width = sliderRef.current.clientWidth;

  return (
    <div className='bg-red-200  h-[200%]'>
    <div className=''>
       <p className='text-xl'>Flashcard Detail</p>
      <p className='text-2xl m-5 font-bold' >
        {decks[index.index].deckName}
      </p>
      <p className='ml-24 mr-24'>
        {decks[index.index].deckDes}
      </p>
    </div>
 
     <div className='flex justify-center'>
      <div className='flex flex-row w-[70%] px-1 py-1 h-[100%] bg-blue-900 relative '>

        <div className=' relative bg-white flex flex-col overflow-clip items-center min-w-[15%]  '>
          <p>Flashcards</p>
          <hr className='border border-black w- '></hr>
          {decks[index.index].terms.map((item,index)=>{
            return(
              <div className=''>
                <button type="button" className='' onClick={()=>{sliderRef.current.scrollLeft = width*index;setTermIndex(index)}}>{item.term}</button>
              </div>
            )
          })}
        </div>
        <div className='flex flex-row items-start  w-[70%]   h-[100%] px-1 py-1  bg-red-900 relative left-[1%]'>
          <div className='flex flex-row w-[100%] overflow-hidden bg-blue-200 px-1 py-1 h-96 scroll-smooth'ref={sliderRef} >
            
          {decks[index.index].terms.map((item,index)=>{
            return(
                <div className=' flex flex-row items-start bg-amber-300  min-w-[100%] mr-1  px-1 py-1' >
                  <div className='w-[35%] h-[99%] flex mx-2 mr-10 bg-red-500 px-1 py-1  '>
                  <img className='w-[100%]' src={item.image}></img>
                 
                  </div>
                  <div className='w-[65%] bg-blue-700'>
                  <p >{item.definition}</p>
                  </div>
                  
                 
                </div>
                
              
            )
          })}
          </div>
        </div>
         
      </div>
      
      </div>
      <div className=' flex justify-center gap-5 min-w-[100%] text-2xl'>
      <button className="" onClick={()=>{
        console.log(sliderRef.current.clientWidth)
       
        sliderRef.current.scrollLeft -=width
        if(termIndex)
        console.log(sliderRef.current.scrollLeft)
      }}>&lt;</button>
      <span>{termIndex+1}</span>
      <button onClick={()=>{
        console.log(sliderRef.current.clientWidth)
        let width = sliderRef.current.clientWidth;
        sliderRef.current.scrollLeft +=width
        
      }}>&gt;</button>
      </div>
    </div>

  )
}

export default FlashcardDetail