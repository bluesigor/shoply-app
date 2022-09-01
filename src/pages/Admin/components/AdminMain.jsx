import React from 'react'
import { Paper, Stack } from '@mui/material'

import AdminProducts from '../AdminProducts/AdminProducts'
import AdminUsers from '../AdminUsers/AdminUsers'
import AdminSidebar from './AdminSidebar'
import BlockedUsersTable from '../BlockedUsersTable/BlockedUsersTable'

import { useAdminDataContext } from '../../../context/AdminUsersDataContext'

const AdminMain = () => {
  const { adminUsers, adminProducts, blockedUsers } = useAdminDataContext()

  return (
    <Paper
      sx={{
        margin: '30px',
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <AdminSidebar />
      <Stack
        sx={{
          borderLeft: '0.5px solid black',
        }}
        display="flex"
        width="100%"
        flexDirection="column"
      >
        {adminUsers.length > 0 ? <AdminUsers /> : null}
        {adminProducts.length > 0 ? <AdminProducts /> : null}
        {adminUsers.length === 0 &&
        adminProducts.length === 0 &&
        blockedUsers.length > 0 ? (
          <BlockedUsersTable />
        ) : null}
      </Stack>
    </Paper>
  )
}

export default AdminMain
