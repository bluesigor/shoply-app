import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'

import Localizator from '../../../common/components/Localizator'
import useAddToCart from '../../../utils/hooks/useAddToCart'

const ProductCardButton = ({ id, product }) => {
  const { handleAddToCart } = useAddToCart()

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
      <IconButton onClick={() => handleAddToCart(product)}>
        <ShoppingBag />
      </IconButton>
    </Box>
  )
}

export default ProductCardButton
