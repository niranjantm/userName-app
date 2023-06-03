import { createSlice } from "@reduxjs/toolkit";
const displaySlice = createSlice({
    name:"display",
    initialState:{index:null},
    reducers:{
        flashDisplay(state,action){
            state.index = action.payload;
        }
    }

})
export const displayAction = displaySlice.actions;
export default displaySlice.reducer