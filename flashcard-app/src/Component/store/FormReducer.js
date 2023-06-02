import { createSlice } from "@reduxjs/toolkit";

const deckSlice = createSlice(
    {
        name:"singleDeck",
        initialState:[],
        reducers:{
            addDeck(state,action){
                console.log(action.payload)
                state.push(action.payload)

                console.log("state:--",state)
            },
           
        }

    }
)
export const deckAction = deckSlice.actions;
export default deckSlice.reducer;
