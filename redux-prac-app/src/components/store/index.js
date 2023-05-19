
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterReducer";
import authReducer from "./AuthReducer";

const redux = require("redux");



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
  reducer: {counter:counterReducer,auth:authReducer}
});


export default store;
