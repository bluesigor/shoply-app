import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useUserDataContext } from '../../../context/UserDataContext'
import { useShoppingCartContext } from '../../../context/ShoppingCartContext'
import Localizator from '../../../common/components/Localizator'
import useAddToCart from '../../../utils/hooks/useAddToCart'
import useRemoveFromCart from '../../../utils/hooks/useRemoveFromCart'
import ProductRate from './ProductRate'
import { useNotificationContext } from '../../../context/NotificationContext'

const ProductInfo = ({ product }) => {
  const { cart } = useShoppingCartContext()
  const { isLoggedIn, isAdmin } = useUserDataContext()
  const { setNotificationOpen } = useNotificationContext()
  const navigate = useNavigate()

  const { handleAddToCart } = useAddToCart()
  const { removeCartQuantity } = useRemoveFromCart()

  const sameCard = cart.find((item) => item.id === product.id)

  const handleNotificationAdd = () => {
    setNotificationOpen(
      isLoggedIn && !isAdmin
        ? 'Item was added to your basket'
        : 'You have to Sign in first!',
    )
  }

  const handleNotificationRemove = () => {
    setNotificationOpen(
      isLoggedIn && !isAdmin
        ? 'Item was removed from your basket'
        : 'You have to Sign in first!',
    )
  }

  return (
    <Box margin={{ xs: '20px', md: '20px' }} position="relative">
      <Typography
        fontSize={{ xs: '1em', sm: '1.25em', md: '1.5em' }}
        sx={{
          letterSpacing: '0.0935em',
        }}
        p="4"
        component="p"
      >
        <Localizator str={product.title} />
        (<Localizator str={product.category} />)
      </Typography>
      <Box display="flex" flexDirection="column" maxWidth="100%">
        <Typography
          fontSize={{ xs: '0.85em', sm: '0.9em' }}
          fontWeight={400}
          mt={4}
        >
          <Localizator str={product.description} />
        </Typography>
        <ProductRate rating={product.rating.rate} />
        <Stack
          alignItems="flex-start"
          mt={10}
          p={1}
          direction="row"
          justifyContent="space-between"
        >
          <Typography fontWeight={700}>
            <Localizator str="Price" /> {product.price}$
          </Typography>
          {isLoggedIn && !isAdmin && (
            <Stack display="flex" alignItems="center" direction="row">
              <Button
                onClick={() => {
                  removeCartQuantity(product)
                  handleNotificationRemove()
                }}
                size="small"
                color="inherit"
                variant="outlined"
              >
                -
              </Button>
              <Typography marginX={4}>
                {sameCard ? sameCard.quantity : 0}
              </Typography>
              <Button
                onClick={() => {
                  handleAddToCart(product)
                  handleNotificationAdd()
                }}
                variant="outlined"
                size="small"
                color="inherit"
              >
                +
              </Button>
            </Stack>
          )}
        </Stack>
        {isLoggedIn && !isAdmin && (
          <Button
            onClick={() => navigate('../shoppingCard', { replace: true })}
            variant="contained"
            sx={{
              bgcolor: 'inherit',
              color: 'inherit',
              marginTop: '20px',
              '&:hover': {
                bgcolor: 'inherit',
              },
            }}
          >
            <Localizator str="Go to Shopping Bag" />
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default ProductInfo
