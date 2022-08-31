import React from 'react'
import { Paper, Table, TableContainer } from '@mui/material'

import AdminUsersTableHeader from './AdminUsersTableHeader'
import AdminUserData from './AdminUserData'

const AdminUsersTable = () => {
  return (
    <TableContainer sx={{ minWidth: '100%' }} component={Paper}>
      <Table aria-label="caption table">
        <AdminUsersTableHeader />
        <AdminUserData />
      </Table>
    </TableContainer>
  )
}

export default AdminUsersTable
