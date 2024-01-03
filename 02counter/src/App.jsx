import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // if we use this count variable in diff tags then updation of this variable will 
  // become a challenging task as at diff places it's value will be diff so we use hooks in react
  // acc to react we can update a variable wherever we want in backend
  //but react will control what value to show of that variable on UI by using hooks
  // let count = 0;

  // first is variable, second is function
  const [count, setCount] = useState(0);

  const addValue = () => {
    //so count doesn't go more than 20
    if(count!=20)
      setCount(count+1);
  }

  const decValue = () => {
    // so that count doesn't go less than 0
    if(count!=0)
      setCount(count-1);
  }

  const addValue2 = () => {
    // if we use setCount like this then also react will update value of count only once
    // because useState will send variable of count batch-wise
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    //count final value = 1, if we press for the first time.


    // if we want to update using setCount multiple times then we can use hidden feature
    // of callback function within setCount as it accepts a function.
    // This prevCount will store current state of count and will update it whenever called,
    // but the variable name should be same conventionally, but can be different if wanted.
    setCount((prevCount) => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    //count final value = 4, if we press for the first time.
  }

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter is {count}</h2>

      <button onClick={addValue}>Increase Value</button>
      <button onClick={decValue}>Decrease Value</button>

      <button onClick={addValue2}>Increase Value 4 times</button>
    </>
  )
}

export default App
