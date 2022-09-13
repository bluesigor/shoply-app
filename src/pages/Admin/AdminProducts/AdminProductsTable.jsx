import React from 'react'
import { Paper, Table, TableContainer } from '@mui/material'

import AdminProduct from './components/AdminProduct'
import AdminProductsHeader from './components/AdminProductsHeader'
import AdminProductPagination from './components/AdminProductPagination'
import AdminNewProductModal from '../AdminNewProductModal/AdminNewProductModal'
import { useAdminDataContext } from '../../../context/AdminUsersDataContext'

const AdminProductsTable = () => {
  const { adminProducts } = useAdminDataContext()

  return (
    <>
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
        {adminProducts.length > 0 && <AdminNewProductModal />}
      </TableContainer>
    </>
  )
}

export default AdminProductsTable
