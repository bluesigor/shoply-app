import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useLogin from '../../utils/hooks/useLogin'

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useLogin()
  const location = useLocation()
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return <Outlet />
}

export default RequireAuth
