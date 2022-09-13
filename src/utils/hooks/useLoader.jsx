import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import usePurchaseShoppingCart from './usePurchaseShoppingCart'

const useLoader = () => {
  const [open, setOpen] = useState(false)
  const { orderProducts } = usePurchaseShoppingCart()
  const { clearCart } = useShoppingCartContext()
  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(true)

    setTimeout(() => {
      orderProducts()
      setOpen(false)
      clearCart()
      navigate('/')
    }, 4000)
  }

  return { open, handleClose, handleToggle }
}

export default useLoader
