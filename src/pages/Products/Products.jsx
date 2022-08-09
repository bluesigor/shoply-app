import { Container } from '@mui/material'

import ProductsLoading from './components/ProductsLoading'
import ProductsError from './components/ProductsError'

const Products = () => {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        maxWidth="lg"
      >
        <ProductsLoading />
        <ProductsError />
      </Container>
    </>
  )
}

export default Products
