import { createContext, useContext, useReducer } from 'react'

import {
  adminDataInitialState,
  adminDataReducer,
} from '../store/adminDataReducer/adminDataReducer'

const AdminDataContext = createContext()

export const AdminDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminDataReducer, adminDataInitialState)

  const adminDataValue = {
    adminUsers: state.adminUsers,
    setAdminUsersData: (value) =>
      dispatch({ type: 'setAdminUsersData', payload: value }),

    adminProducts: state.adminProducts,
    setAdminProductsData: (value) =>
      dispatch({ type: 'setAdminProductsData', payload: value }),

    updateAdminProductsData: (id, value) =>
      dispatch({ type: 'updateAdminProductsData', id, value }),
  }

  return (
    <AdminDataContext.Provider value={adminDataValue}>
      {children}
    </AdminDataContext.Provider>
  )
}

export const useAdminDataContext = () => {
  return useContext(AdminDataContext)
}
