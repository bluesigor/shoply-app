import { createContext, useContext, useReducer } from 'react'

import {
  singleProductInitialState,
  singleProductReducer,
} from '../store/singleProductReducer/singleProductReducer'

const SingleProductContext = createContext()

export const SingleProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    singleProductReducer,
    singleProductInitialState,
  )

  const singleProductValue = {
    product: state.product,
    isChoosen: state.isChoosen,
    setSingleProductData: (value) =>
      dispatch({ type: 'setSingleProductData', payload: value }),
  }

  return (
    <SingleProductContext.Provider value={singleProductValue}>
      {children}
    </SingleProductContext.Provider>
  )
}

export const useSingleProductContext = () => {
  return useContext(SingleProductContext)
}
