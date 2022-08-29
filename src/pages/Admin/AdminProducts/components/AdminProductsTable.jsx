import React from 'react'
import { Paper, Table, TableContainer } from '@mui/material'

import AdminProduct from './AdminProduct'
import AdminProductsHeader from './AdminProductsHeader'

const AdminProductsTable = ({ page, rowsPerPage }) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: '650px', position: 'relative', marginBottom: '50px' }}
        aria-label="caption table"
      >
        <AdminProductsHeader />
        <AdminProduct page={page} rowsPerPage={rowsPerPage} />
      </Table>
    </TableContainer>
  )
}

export default AdminProductsTable
