import { useParams } from 'react-router-dom'
import { useGetProducts } from './getProducts/getProducts'

const useSingleProduct = () => {
  const { productsData } = useGetProducts()
  const { productId } = useParams()

  const singleProduct = productsData.find(
    (product) => product.id === +productId,
  )

  return { singleProduct }
}

export default useSingleProduct
