import { useReducer, createContext, useContext } from 'react'

import {
  productsDataInitialState,
  productsDataReducer,
} from '../store/productsDataReducer/productsDataReducer'

const ProductsDataContext = createContext()

export const ProductsDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    productsDataReducer,
    productsDataInitialState,
  )

  const productsDataValue = {
    ...state,
    setProductsData: (products) => {
      dispatch({ type: 'setProductsData', payload: products })
    },
    setProductsDataError: () => {
      dispatch({ type: 'setProductsDataError' })
    },
  }

  return (
    <ProductsDataContext.Provider value={productsDataValue}>
      {children}
    </ProductsDataContext.Provider>
  )
}

export const useProductsDataContext = () => {
  return useContext(ProductsDataContext)
}
