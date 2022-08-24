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
        padding: '20px',
        margin: '10px 25px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        sx={{
          textAlign: 'center',
          maxHeight: '100%',
        }}
        component="img"
        image={image}
        alt="prod"
      />
      <CardContent
        sx={{
          // maxWidth: '100%',
          // height: '100%',
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
