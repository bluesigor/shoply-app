import React from 'react'
import { Box, CardMedia } from '@mui/material'

const ProductImage = ({ image, alt }) => {
  return (
    <Box
      sx={{
        flex: '1',
        border: '1px solid inherit',
      }}
      item
    >
      <CardMedia
        sx={{
          maxWidth: '340px',
          maxHeight: '100%',
        }}
        component="img"
        image={image}
        alt={alt}
      />
    </Box>
  )
}

export default ProductImage
