import { useEffect } from 'react'
import axios from 'axios'

import { useAdminDataContext } from '../../context/AdminUsersDataContext'
import { useNotificationContext } from '../../context/NotificationContext'

const useAdminData = () => {
  const {
    setAdminUsersData,
    showUsers,
    showProducts,
    showBlockedUsers,
  } = useAdminDataContext()
  const { setNotificationOpen } = useNotificationContext()

  const handleShowProducts = () => {
    showProducts()
  }

  const handleShowBlockedUsers = () => {
    showBlockedUsers()
  }

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
