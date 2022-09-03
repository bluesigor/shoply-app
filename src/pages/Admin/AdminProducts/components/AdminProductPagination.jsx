import React from 'react'
import { TablePagination } from '@mui/material'

import { useAdminDataContext } from '../../../../context/AdminUsersDataContext'

const AdminProductPagination = () => {
  const { adminProducts, handlePagination, pagination } = useAdminDataContext()

  const handleChangePage = (event, newPage) => {
    handlePagination({
      productsPage: newPage,
    })
  }

  const handleChangeRowsPerPage = (event) => {
    handlePagination({
      productsPage: 0,
      productsRowsPerPage: event.target.value,
    })
  }
  const { productsRowsPerPage, productsPage } = pagination

  return (
    <TablePagination
      sx={{
        minHeight: '10vh',
      }}
      rowsPerPageOptions={[5, 10]}
      component="div"
      count={adminProducts.length}
      rowsPerPage={productsRowsPerPage}
      page={productsPage}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}

export default AdminProductPagination
