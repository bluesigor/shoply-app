import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Stack } from '@mui/material'

import ProductInfo from './components/ProductInfo'
import ProductImage from './components/ProductImage'
import { useGetProducts } from '../../services/getProducts/getProducts'

const Product = () => {
  const { productId } = useParams()
  const { productsData } = useGetProducts()

  const singleProduct = productsData.find(
    (product) => product.id === +productId,
  )

  if (singleProduct !== undefined) {
    return (
      <Container>
        <Stack
          m={{ xs: '0px', md: '50px' }}
          p={{ xs: '20px 15px', md: '50px', sm: '100px' }}
          display="flex"
          alignItems="center"
          height={{ xs: '120vh', sm: '130vh', lg: '60vh' }}
          spacing={20}
          direction={{ md: 'column', sm: 'column', xs: 'column', lg: 'row' }}
        >
          <ProductImage image={singleProduct.image} />
          <ProductInfo product={singleProduct} />
        </Stack>
      </Container>
    )
  }
}

export default Product
