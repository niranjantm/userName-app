import { createSlice } from "@reduxjs/toolkit";

const initialState = { isButtonValid: false, cartItems: []};


const cartSlice = createSlice({
  name: "cartButton",
  initialState: initialState,
  reducers: {
    validButtonHandler(state) {
      state.isButtonValid = !state.isButtonValid;
    },


    addToCartHandler(state, action) {
      // state.cartQuantity++ ;
      console.log(state);
      console.log(action.payload);
      console.log(state.cartItems);

      state.cartItems = [...state.cartItems,action.payload];
      // console.log(state.cartItems[0])
      },
      itemAddHandler(state,action){
        const index = state.cartItems.findIndex((item)=>item.id ===action.payload);
        state.cartItems[index].quantity++;
      },
      itemRemove(state,action){
        const index = state.cartItems.findIndex((item)=>item.id===action.payload);
        if(state.cartItems[index].quantity===1){
            state.cartItems = state.cartItems.filter((item)=>item.id!=action.payload)
        }
        else{
            state.cartItems[index].quantity--;
        }
        
        
      }
    },
  },
);

export default cartSlice.reducer;
export const cartAction = cartSlice.actions;
