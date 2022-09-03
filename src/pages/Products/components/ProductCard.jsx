import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

import Localizator from '../../../common/components/Localizator'
import ProductCardButton from './ProductCardButton'

const ProductCard = ({ title, product, id, image }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: '300px',
        flex: ' 1 1 21rem',
        boxShadow: '0px 1px 20px 1px rgba(0,0,0,0.75)',
        display: 'flex',
        margin: 2,
        maxHeight: '500px !important',
        justifyContent: 'space-between',
        flexDirection: 'column',
        '@media (min-width:1024px)': {
          maxWidth: '300px',
          maxHeight: '500px',
          margin: 3,
        },
      }}
    >
      <CardMedia
        sx={{
          textAlign: 'center',
          objectFit: 'contain',
          padding: 1,
          maxHeight: '60% ',
          '@media (min-width:1024px)': {
            padding: 3,
          },
        }}
        component="img"
        image={image}
        alt="prod"
      />
      <CardContent
        sx={{
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
