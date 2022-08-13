import { Box } from '@mui/material'

import React from 'react'

import { useSingleProductContext } from '../../../context/SingleProductContext'
const ProductLogo = () => {
  const { product } = useSingleProductContext()
  const { image } = product

  return (
    <Box
      sx={{
        border: '1px solid inherit',
      }}
      item
    >
      <img
        style={{
          width: '270px',
          height: '320px',
        }}
        src={image}
        alt="ProductLogo"
      />
    </Box>
  )
}

export default ProductLogo
