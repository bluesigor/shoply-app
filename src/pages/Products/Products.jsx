import { Container, Stack } from '@mui/material'

import { useGetProducts } from '../../services/getProducts/getProducts'
import ProductCard from './components/ProductCard'

const Products = () => {
  const { prodsData } = useGetProducts()

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
        {prodsData.map((item) => {
          const { id, title, image } = item
          return <ProductCard key={id} title={title} image={image} />
        })}
      </Stack>
    </Container>
  )
}

export default Products
