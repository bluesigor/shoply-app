import axios from 'axios'

import { useNotificationContext } from '../../context/NotificationContext'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'

const usePurchaseShoppingCart = () => {
  const { cart } = useShoppingCartContext()
  const { setNotificationOpen } = useNotificationContext()

  const orderProducts = async () => {
    try {
      const response = await axios.post('https://fakestoreapi.com/carts', {
        method: 'POST',
        body: JSON.stringify({
          userId: 5,
          date: '2020-02-03',
          products: cart,
        }),
      })
      setNotificationOpen(
        `Your order #${response.data.id} was successfully submitted!`,
      )
    } catch (e) {
      setNotificationOpen('Something went wrong!')
    }
  }

  return { cart, orderProducts }
}

export default usePurchaseShoppingCart
