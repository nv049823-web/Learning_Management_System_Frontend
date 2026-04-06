import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const storeData =configureStore({
    reducer:rootReducer
})
export default storeData;