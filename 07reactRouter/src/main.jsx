import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       } 
//     ]
//   }
// ])

// another way of creating router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      {/* we will  be able to use below routes as we have used Outlet in Layout.jsx */}

      <Route path='' element={<Home/>} />
      {/* this way we can create route inside route for about */}
      <Route path='about' element={<About/>}>
        {/* URL will be /about/admin this path will also lead to about page if no other
        element is defined for this path */}
        <Route path='admin'/>
      </Route>
      <Route path='contact' element={<Contact/>} />
      {/* we want to pass param in URL and display it in respective component, dynamically */}
      <Route path='user/:userid' element={<User/>} />
      {/* we can directly call api from react router using loader, it will be faster than 
      useEffect, because it will get triggered when mouse hovers on that link or NavLink
      here Github */}
      <Route path='github' element={<Github/>} loader={githubInfoLoader}/>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
