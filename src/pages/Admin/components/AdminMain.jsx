import React from 'react'
import { Paper, Stack } from '@mui/material'

import AdminProducts from '../AdminProducts/AdminProducts'
import AdminUsers from '../AdminUsers/AdminUsers'
import AdminSidebar from './AdminSidebar'
import { useAdminDataContext } from '../../../context/AdminUsersDataContext'

const AdminMain = () => {
  const { adminUsers, adminProducts } = useAdminDataContext()

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
        {adminProducts.length > 0 ? <AdminProducts /> : null}
        {adminUsers.length > 0 ? <AdminUsers /> : null}
      </Stack>
    </Paper>
  )
}

export default AdminMain
