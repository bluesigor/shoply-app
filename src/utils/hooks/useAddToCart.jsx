import { useEffect } from 'react'

import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { useUserDataContext } from '../../context/UserDataContext'

const useAddToCart = () => {
  const { cart, addToShoppingCart, setTotal, total } = useShoppingCartContext()
  const { isLoggedIn, isAdmin } = useUserDataContext()

  useEffect(() => {
    setTotal()
  }, [cart, total])

  const handleAddToCart = (product) => {
    if (isLoggedIn && !isAdmin) {
      const tempProduct = cart.find((item) => item.id === product.id)

      addToShoppingCart(tempProduct, product)
    }
  }

  return { handleAddToCart }
}

export default useAddToCart
