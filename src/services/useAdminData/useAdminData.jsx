import axios from 'axios'

import { useAdminDataContext } from '../../context/AdminUsersDataContext'
import { useNotificationContext } from '../../context/NotificationContext'
import { useGetProducts } from '../getProducts/getProducts'

const useAdminData = () => {
  const { setAdminUsersData, setAdminProductsData } = useAdminDataContext()
  const { setNotificationOpen } = useNotificationContext()
  const { productsData } = useGetProducts()

  const handleShowProducts = () => {
    setAdminProductsData(productsData)
  }

  const handleShowUsers = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/users')

      setAdminUsersData(response.data)
    } catch (e) {
      setNotificationOpen('Something went Wrong!')
    }
  }

  return { handleShowProducts, handleShowUsers }
}

export default useAdminData
