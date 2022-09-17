import axios from 'axios'

import { useNotificationContext } from '../../context/NotificationContext'

const useUpdateAdminData = () => {
  const { setNotificationOpen } = useNotificationContext()

  const sendData = async (product) => {
    try {
      const response = await axios.put(
        `https://fakestoreapi.com/products/${product.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(product),
        },
      )

      const data = response.data

      setNotificationOpen(`Product #${data.id} was successfully updated!`)
    } catch (e) {
      setNotificationOpen('You trying to update not existing item!')
    }
  }

  return { sendData }
}

export default useUpdateAdminData
