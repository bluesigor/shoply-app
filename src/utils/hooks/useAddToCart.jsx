import { useEffect } from 'react'

import { useNotificationContext } from '../../context/NotificationContext'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { useUserDataContext } from '../../context/UserDataContext'

const useAddToCart = () => {
  const { cart, setShoppingCart, setSubTotal } = useShoppingCartContext()
  const { setNotificationOpen } = useNotificationContext()
  const { isLoggedIn, isAdmin } = useUserDataContext()

  useEffect(() => {
    setSubTotal(
      cart.length > 0
        ? Math.round(
            cart.map((item) => item.subtotal).reduce((acc, item) => acc + item),
          )
        : 0,
    )
  }, [cart])

  const handleAddToCart = (product) => {
    const tempProduct = cart.find((item) => item.id === product.id)

    if (isLoggedIn && !isAdmin) {
      if (tempProduct) {
        setShoppingCart(
          cart.map((item) =>
            item.id === product.id
              ? {
                  ...tempProduct,
                  quantity: tempProduct.quantity + 1,
                  subtotal:
                    tempProduct.price * tempProduct.quantity + product.price,
                }
              : item,
          ),
        )
      } else {
        setShoppingCart([
          ...cart,
          {
            ...product,
            quantity: 1,
            subtotal: product.price,
          },
        ])
      }
    }

    setNotificationOpen(
      isLoggedIn && !isAdmin
        ? 'Item was added to your basket'
        : 'You have to Sign in first!',
    )
  }

  return { handleAddToCart }
}

export default useAddToCart
