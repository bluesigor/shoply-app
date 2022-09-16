import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNotificationContext } from '../../context/NotificationContext'

const useGetOrder = ({ id }) => {
  const [orders, setOrders] = useState([])
  const { setNotificationOpen } = useNotificationContext()

  useEffect(() => {
    const getOrder = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/carts/${id}`)
        const data = response.data

        setOrders(data)
      } catch (e) {
        setNotificationOpen('Something went wrong!')
      }
    }

    getOrder()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [orders]
}

export default useGetOrder
