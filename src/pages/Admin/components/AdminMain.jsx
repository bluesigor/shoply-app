import React from 'react'
import { Paper, Stack } from '@mui/material'

import AdminSidebar from './AdminSidebar'
import BlockedUsersTable from '../BlockedUsersTable/BlockedUsersTable'
import AdminProductsTable from '../AdminProducts/AdminProductsTable'
import AdminUsersTable from '../AdminUsers/AdminUsersTable'

import { useAdminDataContext } from '../../../context/AdminUsersDataContext'

const AdminMain = () => {
  const { showPage } = useAdminDataContext()

  return (
    <Paper
      sx={{
        margin: '30px',
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width:1024px)': { flexDirection: 'row' },
      }}
    >
      <AdminSidebar />
      <Stack
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          borderLeft: '0.5px solid inherit',
          '@media (min-width:1024px)': {
            flexDirection: 'column',
          },
        }}
      >
        {!showPage.users && !showPage.products && !showPage.blockedUsers && (
          <AdminUsersTable />
        )}
        {showPage.users && <AdminUsersTable />}
        {showPage.products && <AdminProductsTable />}
        {showPage.blockedUsers && <BlockedUsersTable />}
      </Stack>
    </Paper>
  )
}

export default AdminMain
