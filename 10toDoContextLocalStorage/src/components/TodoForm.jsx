import { useState } from 'react'
import { useToDo } from '../contexts';

function TodoForm() {

    const [todo, setTodo] = useState("");
    // in this func we want to add todo, so importing that func
    const {addToDo} = useToDo();

    const add = (e) => {
        e.preventDefault();

        if(!todo) return;

        // we can pass values in addToDo in many ways

        // method 1, we pass all values
        // addToDo({id: Date.now(), todo: todo, completed: false})

        // method 2, we pass only 2 values, since id is already defined in func in App.jsx
        // addToDo({todo: todo, completed: false})

        // method 3, following method 2, if name of field and value is same todo: todo,
        // then we can directly pass value
        addToDo({todo, completed: false});

        // after adding todo refresh todo
        setTodo("");
    }
    

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none 
                duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" 
            className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


