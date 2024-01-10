import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// An <Outlet> should be used in parent route elements to render their child route elements. This 
// allows nested UI to show up when child routes are rendered. If the parent route matched exactly, 
// it will render a child index route or nothing if there is no index route.
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
