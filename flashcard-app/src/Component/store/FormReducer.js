import { createSlice } from "@reduxjs/toolkit";

const deckSlice = createSlice(
    {
        name:"singleDeck",
        initialState:{deckName:null,deckDes:null,terms:[]},
        reducers:{
            addDeck(state,action){
                state.deckName=action.payload.deckName;
                state.deckDes=action.payload.deckDes;
            },
            addTerm(state,action){
                state.terms.push(action.payload);
            }
           
        }

    }
)
export const deckAction = deckSlice.actions;
export default deckSlice.reducer;
