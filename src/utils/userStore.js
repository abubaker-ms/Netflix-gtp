import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const userStore=configureStore({
    reducer: {  // reducer is an object that contains all the reducers          
        user: userReducer,
    },  
});

export default userStore;