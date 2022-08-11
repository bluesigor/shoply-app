import React from 'react'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import Footer from '../../common/components/Footer'
import Navbar from '../../common/components/Navbar'
import Notification from '../../common/components/Notification'

const Layout = () => {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Notification />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
