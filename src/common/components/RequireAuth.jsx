import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useUserDataContext } from '../../context/UserDataContext'

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useUserDataContext()
  const location = useLocation()
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return <Outlet />
}

export default RequireAuth
