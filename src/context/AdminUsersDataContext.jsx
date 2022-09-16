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

    blockedUsers: state.blockedUsers,
    setBlockedUser: (id) => dispatch({ type: 'setBlockedUser', payload: id }),

    removeBlockedUser: (id) =>
      dispatch({ type: 'removeBlockedUser', payload: id }),

    unblockUser: (id) => dispatch({ type: 'unblockUser', payload: id }),

    showPage: state.showPage,
    showUsers: () => dispatch({ type: 'showUsers' }),

    showBlockedUsers: () => dispatch({ type: 'showBlockedUsers' }),

    showProducts: () => dispatch({ type: 'showProducts' }),

    adminProducts: state.adminProducts,
    setAdminProductsData: (value) =>
      dispatch({ type: 'setAdminProductsData', payload: value }),

    updateAdminProductsData: (id, value) =>
      dispatch({ type: 'updateAdminProductsData', id, value }),

    addNewProduct: (value) =>
      dispatch({ type: 'addNewProduct', payload: value }),

    removeProductData: (id) =>
      dispatch({ type: 'removeProductData', payload: id }),

    pagination: state.pagination,
    handlePagination: (value) =>
      dispatch({ type: 'handlePagination', payload: value }),
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
