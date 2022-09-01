import React from 'react'
import { Paper, Table, TableContainer } from '@mui/material'

import UsersTableHeader from './UsersTableHeader'
import AdminUserData from './AdminUserData'

const AdminUsersTable = () => {
  return (
    <TableContainer sx={{ minWidth: '100%' }} component={Paper}>
      <Table aria-label="caption table">
        <UsersTableHeader />
        <AdminUserData />
      </Table>
    </TableContainer>
  )
}

export default AdminUsersTable
