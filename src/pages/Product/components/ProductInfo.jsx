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
    <Box
      flex={{ xs: 0.5, sm: 0.5, md: 0.5, xl: 2 }}
      flexDirection="column"
      mt={{ xs: 1, sx: 2, sm: 2, md: 2 }}
      // margin={{ xs: '20px', md: '20px' }}
    >
      <Typography
        fontSize={{ xs: '0.75em', sm: '1em', md: '1.3em' }}
        sx={{
          letterSpacing: '0.0935em',
          marginRight: 0,
        }}
        fontWeight={700}
        display="flex"
        flex={{ xs: 0.5, sm: 0.5, md: 0.5, xl: 1 }}
        textAlign="flexStart"
        p="4"
        component="p"
      >
        <Localizator str={product.title} />
        (<Localizator str={product.category} />)
      </Typography>
      <Box display="flex" flex={0.5} flexDirection="column">
        <Typography
          fontSize={{ xs: '0.7em', sm: '0.8em' }}
          fontWeight={400}
          mt={{ xs: 1, sm: 1, md: 2, xl: 5 }}
          flex={{ xs: 0.5, sm: 0.5, md: 0.5, xl: 1 }}
        >
          <Localizator str={product.description} />
        </Typography>
        <ProductRate
          sx={{
            flex: '1',
          }}
          rating={product.rating.rate}
        />
        <Stack
          alignItems="flex-start"
          mt={{ xs: 1, sm: 1, md: 5 }}
          p={1}
          direction="row"
          flex={1}
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
              marginTop: { xs: 0, sm: '20px' },
              '&:hover': {
                bgcolor: 'inherit',
              },
            }}
          >
            <Localizator str="Go to Shopping Cart" />
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default ProductInfo
