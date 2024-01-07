import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  //number allowed in password or not
  const [numAllowed, setNumAllowed] = useState(false);
  //special character allowed in password or not
  const [spCharAllowed, setSpCharAllowed] = useState(false);
  //the generated password
  const [password, setPassword] = useState("");

  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  // here we are using it to refer to the password in input on click of copy button
  const passwordRef = useRef(null);

  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  // so in a way we are using memoization.
  // On the initial render, useCallback returns the fn function you have passed.
  // During subsequent renders, it will either return an already stored fn  function 
  // from the last render (if the dependencies haven’t changed), or return the fn function 
  // you have passed during this render.
  // basically we use it, when we have to call a function multiple times, in optimized way
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if(numAllowed) str += "0123456789";
    if(spCharAllowed) str += "!@#$%^&*()_+~";

    // now we are picking random char and we will do it length number of times
    for(let i=1; i<=length; i++)
    {
      //doing +1 so that char is never 0
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    //updating value of password with pass
    setPassword(pass);
  },
  // Below are the dependencies for calling the useCallback function, i.e. useCallback will
  // run whenever any of these change and will cache the result  
  // we are use setPassword as dependency for optimization of memoization in useCallback
  // if we will pass password instead of setPassword, then useCallback  will run infinitely
  [length, numAllowed, spCharAllowed, setPassword]);

  const copyPassToClipboard = useCallback(() => {
    // check if input is blank or not, will show selected text as blue due to useRef
    passwordRef.current?.select();
    // allow user to select string of this length
    passwordRef.current?.setSelectionRange(0,999);

    // copy current password to clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect is a React Hook that lets you synchronize a component with an external system.
  useEffect(() => {
    passwordGenerator()
    // run on the first render and every time any of the below dependencies change
  }, [length, numAllowed, spCharAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-lg mx-auto my-20 shadow-md rounded-lg px-4 py-3 
        text-orange-500 bg-gray-800'>
          <h1 className='text-white text-center'>Password Generator</h1>

          <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-2'>
            <input type="text" value={password} placeholder='Password' 
              readOnly className='outline-none w-full px-3 py-1'
              // to give reference to useRef from input
              ref={passwordRef}/>
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0
              hover:bg-blue-600 transition ease delay-100'
              onClick={copyPassToClipboard}
            >
              Copy
            </button>
          </div>

          <div className='flex text-sm gap-x-6'>
            <div className='flex items-center gap-x-1'>
              <input 
                type="range"
                min={6}
                max={100}
                className='cursor-pointer'
                value={length}
                onChange={(e) => {setLength(e.target.value)}} 
              />
              <label htmlFor="">Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox"
                defaultChecked={numAllowed}//by default true or false acc to state
                id='numberInput'
                //to toggle btw true and false, use callback with previous value in setNumAllowed
                onChange={() => {setNumAllowed((prev) => !prev)}} 
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox"
                defaultChecked={spCharAllowed}//by default true or false acc to state
                id='characterInput'
                //to toggle btw true and false, using callback with previous value in setSpCharAllowed
                onChange={() => {setSpCharAllowed((prev) => !prev)}} 
              />
              <label htmlFor="characterInput">Special Characters</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
