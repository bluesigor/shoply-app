import React from 'react'
import { Button, Backdrop, CircularProgress } from '@mui/material'
import { Box } from '@mui/system'

import Localizator from '../../../common/components/Localizator'
import { useShoppingCartContext } from '../../../context/ShoppingCartContext'
import usePurchase from '../../../utils/hooks/usePurchase'
import { useNotificationContext } from '../../../context/NotificationContext'

const ShoppingCartOrderButton = () => {
  const { open, handleClose, handleToggle } = usePurchase()
  const { clearCart } = useShoppingCartContext()
  const { setNotificationOpen } = useNotificationContext()

  const handleClearCart = () => {
    clearCart()
    setNotificationOpen('Your cart was cleared!')
  }

  return (
    <Box
      sx={{
        width: '100%',
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        height: '40px',
      }}
    >
      <Button
        size="small"
        onClick={handleClearCart}
        color="inherit"
        variant="contained"
      >
        <Localizator str="Clear Cart" />
      </Button>
      <Button
        size="small"
        onClick={handleToggle}
        color="inherit"
        variant="contained"
      >
        <Localizator str="Order Now" />
      </Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
        transitionDuration={2000}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  )
}

export default ShoppingCartOrderButton
