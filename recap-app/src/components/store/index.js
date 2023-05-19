
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartButtonReducer"

 const store = configureStore({
    reducer:{cartReducer:cartReducer}
})
export default store;