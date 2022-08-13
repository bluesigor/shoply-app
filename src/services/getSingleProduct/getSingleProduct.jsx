import axios from 'axios'

import { useNotificationContext } from '../../context/NotificationContext'
import { useSingleProductContext } from '../../context/SingleProductContext'
import { useGetProducts } from '../getProducts/getProducts'

const useGetSingleProduct = ({ id }) => {
  const { setNotificationOpen } = useNotificationContext()
  const { setSingleProductData } = useSingleProductContext()

  const { productsData } = useGetProducts()

  const exact_id = productsData
    .filter((item) => item.id === id)
    .map((item) => item.id)
    .join('')

  const fetchSingleProductData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${exact_id}`,
      )

      setSingleProductData(response.data)
    } catch (e) {
      setNotificationOpen('Something went wrong...')
    }
  }

  return { exact_id, fetchSingleProductData }
}

export default useGetSingleProduct
