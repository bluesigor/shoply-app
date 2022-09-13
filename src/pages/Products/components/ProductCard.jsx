import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import Localizator from '../../../common/components/Localizator'
import ProductCardButton from './ProductCardButton'

const style = {
  textAlign: 'center',
  objectFit: 'contain',
  padding: 1,
  width: '100%',
  height: '250px',
  '@media (minWidth:1024px)': {
    width: '100%',
    height: '300px',
  },
}

const ProductCard = ({ title, product, price, id, image }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: '280px',
        flex: ' 1 1 21rem',
        border: '1px solid ',
        display: 'flex',
        margin: 2,
        maxHeight: '400px',
        justifyContent: 'space-between',
        flexDirection: 'column',
        '@media (min-width:1024px)': {
          maxWidth: '300px',
          maxHeight: '500px',
          margin: 3,
        },
      }}
    >
      <LazyLoadImage
        effect="blur"
        style={style}
        component="img"
        src={image}
        alt="prod"
      />

      <CardContent
        sx={{
          fontSize: '16px',
          dispaly: 'flex',
          fd: 'column',
        }}
      >
        <Typography
          letterSpacing="1.4px"
          variant="p"
          fontWeight="300"
          component="p"
        >
          <Localizator str={title} />
        </Typography>
      </CardContent>
      <ProductCardButton price={price} product={product} id={id} />
    </Card>
  )
}

export default ProductCard
