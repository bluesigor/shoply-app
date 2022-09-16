import { Container, Stack } from '@mui/material'

import ProductInfo from './components/ProductInfo'
import ProductImage from './components/ProductImage'
import useSingleProduct from '../../utils/hooks/useSingleProduct'

const Product = () => {
  const { singleProduct } = useSingleProduct()

  if (!singleProduct) {
    return null
  }

  return (
    <Container>
      <Stack
        p={{ xs: '20px 15px', sm: '30px', md: '30px' }}
        display="flex"
        alignItems="center"
        height={{ xs: '90vh', sm: '90vh', lg: '70vh' }}
        direction={{ md: 'column', sm: 'column', xs: 'column', lg: 'row' }}
      >
        <ProductImage alt={singleProduct.title} image={singleProduct.image} />
        <ProductInfo product={singleProduct} />
      </Stack>
    </Container>
  )
}

export default Product
