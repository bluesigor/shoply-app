import { Container, Stack } from '@mui/material'

import { useGetProducts } from '../../services/getProducts/getProducts'
import ProductCard from './components/ProductCard'

const Products = () => {
  const { productsData } = useGetProducts()

  const product = productsData.map((item) => {
    const { id, title, image } = item

    return (
      <ProductCard
        key={id}
        id={id}
        product={item}
        title={title}
        image={image}
      />
    )
  })

  return (
    <Container maxWidth="lg">
      <Stack
        sx={{
          padding: '30px',
          margin: '0px 20px',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flexDirection: 'row',
          '@media (min-width:320px)': { margin: 1, padding: '0px' },
          '@media (min-width:768px)': { margin: 2, padding: 1 },
        }}
      >
        {product}
      </Stack>
    </Container>
  )
}

export default Products
