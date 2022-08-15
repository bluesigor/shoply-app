import React from 'react'
import { ShoppingBag } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

import { useNotificationContext } from '../../../context/NotificationContext'
import Localizator from '../../../common/components/Localizator'

const ProductCardButton = ({ id }) => {
  const { setNotificationOpen } = useNotificationContext()

  const handleMessage = () => {
    setNotificationOpen('Item was added to your basket')
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link
        to={`/products/${id}`}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <Localizator str="Details" />
      </Link>
      <IconButton onClick={handleMessage}>
        <ShoppingBag />
      </IconButton>
    </Box>
  )
}

export default ProductCardButton
