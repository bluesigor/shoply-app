import { Container, Stack } from '@mui/material'

import { useGetProducts } from '../../services/getProducts/getProducts'
import ProductCard from './components/ProductCard'

const Products = () => {
  const { productsData } = useGetProducts()

  const product = productsData.map((item) => {
    const { id, title, image } = item
    return <ProductCard key={id} id={id} title={title} image={image} />
  })

  return (
    <Container maxWidth="lg">
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {product}
      </Stack>
    </Container>
  )
}

export default Products
