import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { useUserDataContext } from '../../context/UserDataContext'

const useRemoveFromCart = () => {
  const { cart, setShoppingCart } = useShoppingCartContext()
  const { isLoggedIn, isAdmin } = useUserDataContext()

  const removeCartQuantity = (product) => {
    const existItem = cart.find((item) => item.id === product.id)

    if (isLoggedIn && !isAdmin) {
      if (existItem.quantity === 1) {
        const tempItem = cart.filter((item) => item.id !== product.id)

        setShoppingCart(tempItem)
      } else {
        const tempItem = cart.map((item) =>
          item.id === product.id
            ? {
                ...existItem,
                quantity: existItem.quantity - 1,
                subtotal: existItem.subtotal - existItem.price,
              }
            : item,
        )

        setShoppingCart(tempItem)
      }
    }
  }

  const removeCart = (product) => {
    const existItem = cart.find((item) => item.id === product.id)

    if (existItem) {
      const tempItem = cart.filter((item) => item.id !== product.id)

      setShoppingCart(tempItem)
    } else {
      return null
    }
  }

  return { removeCartQuantity, removeCart }
}

export default useRemoveFromCart
