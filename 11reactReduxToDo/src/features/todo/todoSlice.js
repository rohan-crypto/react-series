// nanoid is used to generate unique ids
// createSlice is used to create slice or reducers
import { createSlice, nanoid } from "@reduxjs/toolkit";

// first thing we define in store in initialState which can be array, object, etc.
const initialState = {
    // this initialState will store todos
    todos: [{
        id: 1,
        text: "hello world"
    }]
}

// Now we have to create slice. It can have multiple slices inside.
export const todoSlice = createSlice({

    //Each slice has name, initialState and reducers [reducers objects with property: function]
    name: 'todo',
    initialState,

    // the functions of reducers can be defined directly here or 
    // functions can be defined before createSlice and referred here [refer not call]
    reducers: {

        // each function in reducer will have state and action, syntax
        // state => current value of initialState in store
        // action => it gives us the values we need while using function, like id in removeTodo
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                // We can also write text: action.payload.text but here we are omitting .text 
                // because we are extracting text only from payload object
                text: action.payload,
            }
            // upsert value of todo in state
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // here we are directly updating todos state
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) => todo.id === action.payload ? 
        //         {...todo, text: action.payload.text} : todo)
        // }, 
    }
})

// now we export individual reducers or functionalities, acc to syntax as we will be using 
// them in components
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// now export all reducers' list. If we will create more slice, like authSlice then
// we will have to export it's individual reducers as well as authSlice.reducer
export default todoSlice.reducer