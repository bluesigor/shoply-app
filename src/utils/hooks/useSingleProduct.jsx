import { useParams } from 'react-router-dom'
import { useGetProducts } from '../../services/getProducts/getProducts'

const useSingleProduct = () => {
  const { productId } = useParams()
  const { productsData } = useGetProducts()

  const singleProduct = productsData.find(
    (product) => product.id === +productId,
  )
  return { singleProduct }
}

export default useSingleProduct
