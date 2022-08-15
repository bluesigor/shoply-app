import React from 'react'
import { Box } from '@mui/material'

const ProductImage = ({ image }) => {
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

export default ProductImage
