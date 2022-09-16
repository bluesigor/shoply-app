import React from 'react'
import { Paper, Table, TableContainer } from '@mui/material'

import UsersTableHeader from './components/UsersTableHeader'
import AdminUserData from './components/AdminUserData'
import UserTablePagination from './components/UserTablePagination'

const AdminUsersTable = () => {
  return (
    <TableContainer
      sx={{
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100%',
      }}
      component={Paper}
    >
      <Table aria-label="caption table">
        <UsersTableHeader />
        <AdminUserData />
      </Table>
      <UserTablePagination />
    </TableContainer>
  )
}

export default AdminUsersTable
