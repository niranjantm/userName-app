import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const redux = require("redux");

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState:initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    userAdd(state, action) {
      state.counter += +action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const intialAuthState = {isLogin:false,isLogOut:true}
const authSlice = createSlice({
    name:"auth",
    initialState:intialAuthState,
    reducers:{
        isLogin(state){
            state.isLogin = true;
            state.isLogOut = false
        },
        isLogOut(state){
            state.isLogOut = true;
            state.isLogin = false
        }
    }

})
// const counterReducer = (state=intialState,action)=>{
//     if(action.type ==="INCREMENT"){

//         return{counter:state.counter+1,showCounter:state.showCounter};
//     }
//     if(action.type==="INCREASE5"){
//         return{counter:state.counter+action.amount,showCounter:state.showCounter}
//     }
//     if(action.type==="DECREMENT"){
//         return{counter:state.counter-1,showCounter:state.showCounter}
//     }
//     if(action.type==="USERADD"){
//         return{counter:state.counter+action.amount,showCounter:state.showCounter}
//     }
//     if(action.type==="toggle"){
//         return{counter:state.counter,showCounter:!state.showCounter}
//     }

// return state;

const store = configureStore({
  reducer: {counter:counterSlice.reducer,auth:authSlice.reducer}
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
