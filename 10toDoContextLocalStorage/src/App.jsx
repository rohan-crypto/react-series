import { useEffect, useState } from 'react'
import { ToDoProvider } from './contexts'
import { TodoForm, TodoItem } from './components';
// import './App.css'

function App() {

  // this todos is an array which will store all the todos
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    // since setTodos array might not be blank, so need to access previous values also 
    // and keep them as it is using callback func in setTodos. Then add new todo.
    // prev will store all currently present todos in an array
    // {id: Date.now(), ...todo} this will add new todo with a unique id
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateToDo = (id, todo) => {
    // prev will store all currently present todos in an array
    // map all currently present todos, if a todo is found with same id as given then update 
    // that todo, else they will remain as it is
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteToDo = (id) => {
    // make a new array using filter method. It will add all the todos whose id does not match
    // with the given id, thus filtering it out or deleting that todo
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? 
    // If we find the todo with same id, then in that todo rest everything will remain same
    // like id and message, but we will toggle the value of completed.
    // Else the todo will remain as it is
    {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  // using localStorage

  // there might be some todos already in localStorage so whenever the app loads for the
  // first time, we need to get them
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length > 0)
      setTodos(todos)
  }, [])

  // whenever there will be change in todos, we need to set them in localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  
  return (
    <ToDoProvider value={{toggleComplete, addToDo, updateToDo, deleteToDo, todos}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo) => (
                    <div key={todo.id} className='w-full'>
                      <TodoItem todo={todo}/>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </ToDoProvider>
  )
}

export default App
