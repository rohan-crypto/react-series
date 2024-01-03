import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//  1
// since ultimately what we pass inside App component is a function so,
// we will directly pass a func, which will work if,
// we pass the function as a component or even as a function
// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // both will work
//   <MyApp/>
//   // MyApp()
// )


//  2
// whatever we pass inside a function is ultimately converted in a tree structure
// so if we directly pass such custom object structure then it will not work
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit Google'
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   //it will not work
//   reactElement
// )


//  3
// const anotherElement = (
//   <a href="https://google.com" target='_blank' rel='noreferrer'>Visit Google</a>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   //it will work as it will also be converted in an object at backend by transpiler (babel)
//   anotherElement
// )


//  4
// const v = " or GooGle";

// // so now we will create an object with naming convention of React
// const newReactElement = React.createElement(
//   //tag
//   'a',
//   //attributes
//   {href: 'https://google.com', target: '_blank'},
//   // children
//   'Click me to visit Google',
//   //variables
//   v
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   //it will work
//   newReactElement
// )


//original
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
