import { useContext, createContext } from "react";

export const ToDoContext = createContext({
    // this todos array will have objects for each todo
    todos: [
        {
            id: 1,
            todo: "Write",
            completed: false,
        }
    ],
    // now we will just create props which will expect function but their functionality 
    // will be defined in App.jsx
    addToDo: (todo) => {},
    updateToDo: (id, todo) => {},
    deleteToDo: (id) => {},
    toggleComplete: (id) => {},
})


// custom hook to use ToDoContext
export const useToDo = () => {
    return useContext(ToDoContext);
}


// just storing ToDoContext.Provider in a variable for easy usage 
export const ToDoProvider = ToDoContext.Provider;