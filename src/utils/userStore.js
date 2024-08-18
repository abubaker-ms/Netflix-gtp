import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const userStore=configureStore({
    reducer: {  // reducer is an object that contains all the reducers          
        user: userReducer,
        movie: movieReducer
    },  
});

export default userStore;