import React from 'react'
import { Container, Box } from '@mui/material'

import FilterProducts from './components/FilterProducts'
import useSearchProducts from '../../utils/hooks/useSearchProducts'
import SortProducts from './components/SortProducts'
import Products from './components/Products'

const ProductsWrapper = () => {
  const {
    filteredProducts,
    handleSortValue,
    sortValue,
    handleCategory,
  } = useSearchProducts()

  return (
    <Container maxWidth="xl">
      <Box
        maxWidth="100%"
        flexDirection="column"
        display="flex"
        justifyContent="space-between"
      >
        <Box
          maxWidth="100%"
          p={{
            xs: 1,
            md: 2,
          }}
          display="flex"
          alignItems="center"
          m={{
            xs: 1,
            md: 5,
            sm: 3,
          }}
          justifyContent="space-between"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <SortProducts
            handleSortValue={handleSortValue}
            sortValue={sortValue}
          />
          <FilterProducts handleCategory={handleCategory} />
        </Box>
        <Products filteredProducts={filteredProducts} />
      </Box>
    </Container>
  )
}

export default ProductsWrapper
