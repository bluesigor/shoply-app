import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

import Localizator from '../../../common/components/Localizator'
import ProductCardButton from './ProductCardButton'

const ProductCard = ({ title, product, id, image }) => {
  return (
    <Card
      flex="1"
      variant="outlined"
      sx={{
        boxShadow: '0px 1px 20px 1px rgba(0,0,0,0.75)',
        padding: '20px',
        margin: '10px 25px',
        height: '100%',
        maxWidth: '300px',
      }}
    >
      <CardMedia
        sx={{
          maxWidth: '100%',
        }}
        height="100%"
        component="img"
        image={image}
        alt="prod"
      />
      <CardContent
        sx={{
          maxWidth: '100%',
          dispaly: 'flex',
          fd: 'column',
        }}
      >
        <Typography
          letterSpacing="1.4px"
          variant="p"
          fontSize="18px"
          fontWeight="300"
          component="p"
        >
          <Localizator str={title} />
        </Typography>
      </CardContent>
      <ProductCardButton product={product} id={id} />
    </Card>
  )
}

export default ProductCard
