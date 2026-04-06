import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./silice/login";

const rootReducer=combineReducers({
    login:reducer
})
export default rootReducer;