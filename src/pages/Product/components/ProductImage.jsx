import React from 'react'
import { Box } from '@mui/material'

const ProductImage = ({ image, alt }) => {
  return (
    <Box
      sx={{
        flex: '1',
        border: '1px solid inherit',
      }}
      item
    >
      <img
        style={{
          maxWidth: '100%',
          height: '100%',
        }}
        src={image}
        alt={alt}
      />
    </Box>
  )
}

export default ProductImage
