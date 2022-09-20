import { useEffect } from 'react'
import axios from 'axios'

import { useAdminDataContext } from '../../context/AdminUsersDataContext'
import { useNotificationContext } from '../../context/NotificationContext'
import { useGetProducts } from '../getProducts/getProducts'

const useAdminData = () => {
  const {
    setAdminUsersData,
    showUsers,
    showProducts,
    showBlockedUsers,
    setAdminProductsData,
  } = useAdminDataContext()

  const { setNotificationOpen } = useNotificationContext()
  const { productsData } = useGetProducts()

  const handleShowProducts = () => {
    showProducts()
  }

  const handleShowBlockedUsers = () => {
    showBlockedUsers()
  }

  useEffect(() => {
    setAdminProductsData(productsData)
  }, [productsData])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/users')

        setAdminUsersData(response.data)
      } catch (e) {
        setNotificationOpen('Something went Wrong!')
      }
    }

    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleShowUsers = () => {
    showUsers()
  }

  return { handleShowProducts, handleShowUsers, handleShowBlockedUsers }
}

export default useAdminData
