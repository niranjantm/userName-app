import { createSlice } from "@reduxjs/toolkit";

const initialvalues = [];

const deckSlice = createSlice({
    name:"deck",
    initialState:initialvalues,
    reducers:{
        addDeck(state,action){
            state.push({
                deckName:action.payload.deckName,
                deckDes:action.payload.deckDes,
                // terms:[].push(action.payload.term),
                
                
            })
            console.log(state)
        }
    }
})

const termSlice= createSlice({
    name:"term",
    initialState:[],
        
    reducers:{
        addTerm(state,action){
            state.push({
                id:"",
                termName:"",
                termDes:""
            })
        }
    }
    
  
})
export const deckActions = deckSlice.actions;
export const termAction = termSlice.actions;
export const TermSlice = termSlice.reducer;
export default deckSlice.reducer;