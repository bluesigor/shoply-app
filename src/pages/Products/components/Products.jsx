import React from 'react'
import { Stack } from '@mui/material'

import ProductCard from './ProductCard'
import ProductFallback from './ProductFallback'

const Products = ({ filteredProducts }) => {
  const product = filteredProducts ? (
    filteredProducts.map((item) => {
      const { id, title, image } = item

      return (
        <ProductCard
          key={id}
          id={id}
          product={item}
          title={title}
          image={image}
        />
      )
    })
  ) : (
    <ProductFallback />
  )

  return (
    <Stack
      sx={{
        flex: 9,
        padding: '30px',
        margin: '0px 20px',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        flexDirection: 'row',
        '@media (min-width:320px)': { margin: 1, padding: '0px' },
        '@media (min-width:768px)': { margin: 2, padding: 1 },
      }}
    >
      {product}
    </Stack>
  )
}

export default Products
