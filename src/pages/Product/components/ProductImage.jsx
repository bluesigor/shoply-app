import React from 'react'
import { Box, CardMedia } from '@mui/material'

const ProductImage = ({ image, alt }) => {
  return (
    <Box
      flex={{ xs: 1, sm: 1, md: 0.5, xl: 2 }}
      display="flex"
      alignItems="center"
      sx={{
        border: '1px solid inherit',
      }}
      item
    >
      <CardMedia
        sx={{
          maxWidth: { xs: '130px', sm: '350px', md: '340px' },
          maxHeight: { xs: '30vh', sm: '40vh', md: '100%' },
        }}
        m={3}
        component="img"
        image={image}
        alt={alt}
      />
    </Box>
  )
}

export default ProductImage
