import {configureStore} from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    // here we can give list of all reducers at once, but right now we have only 1 reducer
    reducer: todoReducer
});