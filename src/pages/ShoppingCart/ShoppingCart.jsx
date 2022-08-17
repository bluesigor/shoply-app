import React from 'react'
import { Box, Paper, Table, TableContainer, Typography } from '@mui/material'

import Localizator from '../../common/components/Localizator'
import ShoppingCartHeader from './components/ShoppingCartHeader'
import ShoppingCartBody from './components/ShoppingCartBody'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import ShoppingCartFallback from './components/ShoppingCartFallback'
const ShoppingCart = () => {
  const { cart } = useShoppingCartContext()

  if (cart.length === 0) {
    return <ShoppingCartFallback />
  }

  return (
    <Box p={8}>
      <Typography
        marginLeft={{ xs: '20px', md: '60px' }}
        component="h1"
        variant="h4"
      >
        <Localizator str="My Cart" />
      </Typography>
      <TableContainer
        sx={{
          marginTop: '30px',
          boxShadow: '1px 0px 10px 1px rgba(0,0,0,0.75)',
          padding: '50px ',
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <ShoppingCartHeader />
          <ShoppingCartBody />
        </Table>
      </TableContainer>
    </Box>
  )
}

export default ShoppingCart
