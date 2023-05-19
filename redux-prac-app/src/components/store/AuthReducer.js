import {createSlice} from "@reduxjs/toolkit"

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
export const authActions = authSlice.actions;
export default authSlice.reducer;