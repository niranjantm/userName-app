import {configureStore} from "@reduxjs/toolkit"
import { TermSlice as termSlice } from "./formReducer";
import deckSlice from "./formReducer"



const store = configureStore({
    reducer:{deckReducer:deckSlice,termReducer:termSlice}
})

export default store;