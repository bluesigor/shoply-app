import React from 'react'

import AdminUsersTable from './components/AdminUsersTable'
import UserTablePagination from './components/UserTablePagination'

const AdminUsers = () => {
  return (
    <>
      <AdminUsersTable />
      <UserTablePagination />
    </>
  )
}

export default AdminUsers
