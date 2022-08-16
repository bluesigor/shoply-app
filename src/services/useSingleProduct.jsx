import { useGetProducts } from './getProducts/getProducts'

const useSingleProduct = ({ productId }) => {
  const { productsData } = useGetProducts()

  const singleProduct = productsData.find(
    (product) => product.id === +productId,
  )

  return { singleProduct }
}

export default useSingleProduct
