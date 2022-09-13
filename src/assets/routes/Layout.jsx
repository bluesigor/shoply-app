import React from 'react'
import { CssBaseline } from '@mui/material'

import Footer from '../../common/components/Footer'
import Navbar from '../../common/components/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <CssBaseline />
      {children}
      <Footer />
    </>
  )
}

export default Layout
