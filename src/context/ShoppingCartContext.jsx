import { useCallback, useContext, useMemo, useReducer } from 'react'
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

  const memoizedSetShoppingCart = useCallback(
    (product) => dispatch({ type: 'setShoppingCart', payload: product }),
    [dispatch],
  )
  const memoizedSetTotal = useCallback(
    (value) => dispatch({ type: 'setTotal', payload: value }),
    [dispatch],
  )
  const memoizedCart = useMemo(() => state.cart, [state.cart])
  const memoizedCartLength = useMemo(() => memoizedCart.length, [memoizedCart])

  const shoppingCartValue = {
    cart: memoizedCart,
    setShoppingCart: memoizedSetShoppingCart,

    total: state.total,
    setTotal: memoizedSetTotal,
    cartLength: memoizedCartLength,
  }

  return (
    <ShoppingCartContext.Provider value={shoppingCartValue}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)
}
