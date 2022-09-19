import { Box } from '@mui/material'
import { ThreeDots } from 'react-loader-spinner'
import React from 'react'

const Loader = () => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      color="black"
    >
      <ThreeDots color="primary" height="150" width="100px" radius="20" />
    </Box>
  )
}

export default Loader
