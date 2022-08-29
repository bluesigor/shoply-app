import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/system'

import usePurchaseShoppingCart from '../../../utils/hooks/usePurchaseShoppingCart'

const ShoppingCartOrderButton = () => {
  const { orderProducts } = usePurchaseShoppingCart()

  return (
    <Box
      sx={{
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'flex-end',
        height: '80px',
      }}
    >
      <Button onClick={orderProducts} color="inherit" variant="contained">
        Order Now
      </Button>
    </Box>
  )
}

export default ShoppingCartOrderButton
