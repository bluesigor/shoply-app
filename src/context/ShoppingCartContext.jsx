import { useContext, useReducer } from 'react'
import { createContext } from 'react'

import {
  shoppingCartInitialState,
  shoppingCartReducer,
} from '../store/shoppingCartReducer/shoppingCartReducer'

const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    shoppingCartReducer,
    shoppingCartInitialState,
  )

  const shoppingCartValue = {
    cart: state.cart,
    setShoppingCart: (product) =>
      dispatch({ type: 'setShoppingCart', payload: product }),

    total: state.total,
    setTotal: (value) => dispatch({ type: 'setTotal', payload: value }),
  }

  console.log(state)

  return (
    <ShoppingCartContext.Provider value={shoppingCartValue}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)
}
