import React from 'react'
import { useSelector } from 'react-redux'
function FlashcardDetail() {

const decks =useSelector(state=>state.deck)
const index = useSelector(state=>state.display)
console.log("index:----",index)
  return (
    <div>
      <p className='text-xl'>Flashcard Detail</p>
      <p className='text-2xl m-5 font-bold' >
        {decks[index.index].deckName}
      </p>
      <p>
        {decks[index.index].deckDes}
      </p>
      <div className='grid grid-cols-3'>
        
      </div>
    </div>
  )
}

export default FlashcardDetail