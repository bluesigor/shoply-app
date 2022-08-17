import React from 'react'
import { Box, Typography } from '@mui/material'

import Localizator from '../../../common/components/Localizator'

const ShoppingCartFallback = () => {
  return (
    <Box>
      <Typography p={5} minHeight="50vh" component="h1">
        <Localizator str="Your Cart is Empty" />
      </Typography>
    </Box>
  )
}

export default ShoppingCartFallback
