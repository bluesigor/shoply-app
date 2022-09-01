import React from 'react'
import { TablePagination } from '@mui/material'

import { useAdminDataContext } from '../../../../context/AdminUsersDataContext'

const UserTablePagination = () => {
  const { handlePagination, pagination, adminUsers } = useAdminDataContext()

  const handleChangePage = (event, newPage) => {
    handlePagination({
      page: newPage,
    })
  }

  const handleChangeRowsPerPage = (event) => {
    handlePagination({
      page: 0,
      rowsPerPage: event.target.value,
    })
  }

  const { rowsPerPage, page } = pagination

  return (
    <TablePagination
      sx={{
        minHeight: '10vh',
      }}
      rowsPerPageOptions={[2, 3]}
      component="div"
      count={adminUsers.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}

export default UserTablePagination
