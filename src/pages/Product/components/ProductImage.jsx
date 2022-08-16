import React from 'react'
import { Box } from '@mui/material'

const ProductImage = ({ image, alt }) => {
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
        alt={alt}
      />
    </Box>
  )
}

export default ProductImage
