import React from 'react'

import AdminMain from './components/AdminMain'
import AdminTitle from './components/AdminTitle'

import { AdminDataProvider } from '../../context/AdminUsersDataContext'

const Admin = () => {
  return (
    <AdminDataProvider>
      <AdminTitle />
      <AdminMain />
    </AdminDataProvider>
  )
}

export default Admin
