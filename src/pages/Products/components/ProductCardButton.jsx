import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'

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
          fontSize: '16px',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <Typography
          sx={{
            fontSize: '18px',
            color: 'inherit',
            // '@media (minWidth:768px)': {
            //   fontSize: '20px',
            // },
            '@media (min-width:1024px)': {
              fontSize: '22px',
            },
          }}
          component="p"
        >
          <Localizator str="Details" />
        </Typography>
      </Link>
      <IconButton
        onClick={() => {
          handleAddToCart(product)
          handleNotificationAdd()
        }}
      >
        <ShoppingBag
          sx={{
            fontSize: '20px',
            '@media (min-width:768px)': {
              fontSize: '24px',
            },
          }}
        />
      </IconButton>
    </Box>
  )
}

export default ProductCardButton
