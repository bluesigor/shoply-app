import React from 'react'
import { Container, Box } from '@mui/material'

import FilterProducts from './components/FilterProducts'
import SortProducts from './components/SortProducts'
import Products from './components/Products'
import useProductPagination from '../../utils/hooks/useProductPagination'
import SearchProduct from './components/SearchProduct'
import Loader from '../../common/components/Loader'
import { useGetProducts } from '../../services/getProducts/getProducts'

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
    isFallbackProduct,
  } = useProductPagination()

  const { isLoading } = useGetProducts()

  if (isLoading) {
    return <Loader />
  }

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
        <SortProducts setSortValue={setSortValue} sortValue={sortValue} />
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
          <FilterProducts handleCategory={handleCategory} />
        </Box>
        <Products
          isFallbackProduct={isFallbackProduct}
          filteredProducts={filteredProducts}
        />
      </Box>
    </Container>
  )
}

export default ProductsWrapper
