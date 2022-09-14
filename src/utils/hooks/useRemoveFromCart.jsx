import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { useUserDataContext } from '../../context/UserDataContext'

const useRemoveFromCart = () => {
  const {
    cart,
    removeFromShoppingCart,
    removeProduct,
  } = useShoppingCartContext()
  const { isLoggedIn, isAdmin } = useUserDataContext()

  const removeCartQuantity = (product) => {
    if (isLoggedIn && !isAdmin) {
      const existProduct = cart.find((item) => item.id === product.id)
      removeFromShoppingCart(existProduct, product)
    }
  }

  const removeCart = (product) => {
    removeProduct(product)
  }

  return { removeCartQuantity, removeCart }
}

export default useRemoveFromCart
