import React from 'react'
import { Paper } from '@mui/material'

import ProductCard from './ProductCard'
import ProductFallback from './ProductFallback'

const Products = ({ filteredProducts }) => {
  if (!filteredProducts) {
    return <ProductFallback />
  }

  return (
    <Paper
      sx={{
        bgcolor: 'inherit',
        boxShadow: '0px 1px 20px 1px rgba(0,0,0,0.75)',
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
      {filteredProducts.map((item) => {
        const { id, title, image, price } = item

        return (
          <ProductCard
            key={id}
            id={id}
            product={item}
            title={title}
            image={image}
            price={price}
          />
        )
      })}
    </Paper>
  )
}

export default Products
