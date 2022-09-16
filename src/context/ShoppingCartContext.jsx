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

  const memoizedAddShoppingCart = useCallback(
    (tempProduct, product) =>
      dispatch({
        type: 'addToShoppingCart',
        tempProduct,
        product,
      }),
    [dispatch],
  )

  const memoizedRemoveFromShoppingCart = useCallback(
    (existProduct, product) =>
      dispatch({
        type: 'removeFromShoppingCart',
        existProduct,
        product,
      }),
    [dispatch],
  )

  const memoizedClearCart = useCallback(() => {
    dispatch({ type: 'clearCart' })
  }, [dispatch])

  const memoizedRemoveProduct = useCallback(
    (value) => dispatch({ type: 'removeProduct', payload: value }),
    [dispatch],
  )

  const memoizedSetTotal = useCallback(
    (value) => dispatch({ type: 'setTotal', payload: value }),
    [dispatch],
  )

  const memoizedCart = useMemo(() => state.cart, [state.cart])
  const memoizedCartLength = useMemo(() => memoizedCart.length, [memoizedCart])
  const memoizedPurchased = useMemo(() => state.purchased, [state.purchased])

  const shoppingCartValue = {
    cart: memoizedCart,
    addToShoppingCart: memoizedAddShoppingCart,
    removeFromShoppingCart: memoizedRemoveFromShoppingCart,
    removeProduct: memoizedRemoveProduct,
    clearCart: memoizedClearCart,

    total: state.total,
    setTotal: memoizedSetTotal,
    cartLength: memoizedCartLength,

    purchased: memoizedPurchased,
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
