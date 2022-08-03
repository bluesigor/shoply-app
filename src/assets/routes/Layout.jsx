import { CssBaseline } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../common/components/Footer'
import Navbar from '../../common/components/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
