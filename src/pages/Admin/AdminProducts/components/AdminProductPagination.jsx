import React from 'react'
import { TablePagination } from '@mui/material'

import { useAdminDataContext } from '../../../../context/AdminUsersDataContext'

const AdminProductPagination = ({
  page,
  rowsPerPage,
  setPage,
  setRowsPerPage,
}) => {
  const { adminProducts } = useAdminDataContext()

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <TablePagination
      sx={{
        minHeight: '10vh',
      }}
      rowsPerPageOptions={[5, 10]}
      component="div"
      count={adminProducts.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}

export default AdminProductPagination
