import {configureStore} from "@reduxjs/toolkit";
import deckReducer from "./FormReducer"
import displayReducer from "./FormReducer2"

const store = configureStore(
    {
        reducer:{deck:deckReducer,display:displayReducer}
    }
)
export default store;