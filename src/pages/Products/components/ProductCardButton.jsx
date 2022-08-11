import React from 'react'
import { ShoppingBag } from '@mui/icons-material'
import { Box, Button, IconButton } from '@mui/material'

import Localizator from '../../../common/components/Localizator'
import { useNotificationContext } from '../../../context/NotificationContext'

const ProductCardButton = () => {
  const { setNotificationOpen } = useNotificationContext()
  const handleMessage = () => {
    setNotificationOpen('Item was added to your basket')
  }

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Button color="inherit">
        <Localizator str="Details" />
      </Button>
      <IconButton onClick={handleMessage}>
        <ShoppingBag />
      </IconButton>
    </Box>
  )
}

export default ProductCardButton
