import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'

import Localizator from '../../../common/components/Localizator'
import useAddToCart from '../../../utils/hooks/useAddToCart'
import { useUserDataContext } from '../../../context/UserDataContext'
import { useNotificationContext } from '../../../context/NotificationContext'

const ProductCardButton = ({ id, product }) => {
  const { isAdmin, isLoggedIn } = useUserDataContext()
  const { setNotificationOpen } = useNotificationContext()

  const { handleAddToCart } = useAddToCart()

  const handleNotificationAdd = () => {
    setNotificationOpen(
      isLoggedIn && !isAdmin
        ? 'Item was added to your basket'
        : 'You have to Sign in first!',
    )
  }

  return (
    <Box
      sx={{
        padding: '0px 15px',
      }}
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
      <IconButton
        onClick={() => {
          handleAddToCart(product)
          handleNotificationAdd()
        }}
      >
        <ShoppingBag />
      </IconButton>
    </Box>
  )
}

export default ProductCardButton
