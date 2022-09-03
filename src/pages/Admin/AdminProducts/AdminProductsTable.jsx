import React from 'react'
import { Paper, Table, TableContainer } from '@mui/material'

import AdminProduct from './components/AdminProduct'
import AdminProductsHeader from './components/AdminProductsHeader'
import AdminProductPagination from './components/AdminProductPagination'

const AdminProductsTable = () => {
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
        <AdminProductsHeader />
        <AdminProduct />
      </Table>
      <AdminProductPagination />
    </TableContainer>
  )
}

export default AdminProductsTable
