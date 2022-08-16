import { Container, Stack } from '@mui/material'

import ProductInfo from './components/ProductInfo'
import ProductImage from './components/ProductImage'
import useSingleProduct from '../../services/useSingleProduct'

const Product = () => {
  const { singleProduct } = useSingleProduct()

  if (!singleProduct) {
    return null
  }

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
        <ProductImage alt={singleProduct.title} image={singleProduct.image} />
        <ProductInfo product={singleProduct} />
      </Stack>
    </Container>
  )
}

export default Product
