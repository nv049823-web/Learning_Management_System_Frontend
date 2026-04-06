

import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const loginSlice = createSlice({
    name:"login",
    initialState:initialState,
    reducers:{
        login:(state:any,action:any)=>{
            return(state=action.payload)
        },
        logout:(state:any)=>{
            state={}
            return initialState
        }
    }
})
export const {login,logout}=loginSlice.actions;
export default loginSlice.reducer;

