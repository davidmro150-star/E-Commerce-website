import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

const RootLayout = () => {
  return (
    <div>
      <Header />
     <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default RootLayout
