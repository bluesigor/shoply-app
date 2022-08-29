import axios from 'axios'

import { useNotificationContext } from '../../context/NotificationContext'

const useAddAdminData = () => {
  const { setNotificationOpen } = useNotificationContext()

  const addData = async (product) => {
    try {
      const response = await axios.post(`https://fakestoreapi.com/products`, {
        method: 'POST',
        body: JSON.stringify(product),
      })

      const data = response.data

      setNotificationOpen(`You've successfully added product #${data.id}`)
    } catch (e) {
      setNotificationOpen('Something went wrong!')
    }
  }

  return { addData }
}

export default useAddAdminData
