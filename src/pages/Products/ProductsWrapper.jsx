import React from 'react'
import { Container, Box } from '@mui/material'

import FilterProducts from './components/FilterProducts'
import SortProducts from './components/SortProducts'
import Products from './components/Products'
import useProductPagination from '../../utils/hooks/useProductPagination'
import SearchProduct from './components/SearchProduct'

const ProductsWrapper = () => {
  const {
    filteredProducts,
    setSortValue,
    sortValue,
    handleCategory,
    setSearchItem,
    searchItem,
    searchProduct,
    resetSearch,
  } = useProductPagination()

  return (
    <Container maxWidth="xl">
      <Box
        maxWidth="100%"
        flexDirection="column"
        display="flex"
        justifyContent="space-between"
      >
        <SearchProduct
          resetSearch={resetSearch}
          searchItem={searchItem}
          searchProduct={searchProduct}
          setSearchItem={setSearchItem}
        />
        <Box
          maxWidth="100%"
          p={{
            xs: 1,
          }}
          display="flex"
          alignItems="center"
          m={{
            xs: 1,
          }}
          justifyContent="space-between"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <SortProducts setSortValue={setSortValue} sortValue={sortValue} />
          <FilterProducts handleCategory={handleCategory} />
        </Box>
        <Products filteredProducts={filteredProducts} />
      </Box>
    </Container>
  )
}

export default ProductsWrapper
