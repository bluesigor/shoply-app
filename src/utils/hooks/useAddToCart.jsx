import { useEffect } from 'react'

import { useNotificationContext } from '../../context/NotificationContext'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { useUserDataContext } from '../../context/UserDataContext'

const useAddToCart = () => {
  const { cart, setShoppingCart, setTotal, total } = useShoppingCartContext()
  const { setNotificationOpen } = useNotificationContext()
  const { isLoggedIn, isAdmin } = useUserDataContext()

  useEffect(() => {
    setTotal(
      cart.length > 1
        ? Math.round(
            cart.map((item) => item.subtotal).reduce((acc, item) => acc + item),
          ) +
            Math.round(
              cart
                .map((item) => item.shippingFee)
                .reduce((acc, item) => acc + item),
            )
        : cart.length === 1
        ? Math.round(cart.map((item) => item.subtotal)) +
          Math.round(cart.map((item) => item.shippingFee))
        : 0,
    )
  }, [cart, total])

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
                  shippingFee: (tempProduct.subtotal + tempProduct.price) / 10,
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
            shippingFee: product.price / 10,
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
