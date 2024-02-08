import React from 'react'

import { Outlet } from 'react-router-dom'
import Home from './components/home/home'
import Input from './components/input/Input'
function Layout() {
  return (
    <>
    {/* <Header/> */}

    <Outlet />
    {/* <Footer /> */}
    </>
  )
}

export default Layout