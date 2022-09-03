import React from 'react'
import { TablePagination } from '@mui/material'

import { useAdminDataContext } from '../../../../context/AdminUsersDataContext'

const UserTablePagination = () => {
  const { handlePagination, pagination, adminUsers } = useAdminDataContext()

  const handleChangePage = (event, newPage) => {
    handlePagination({
      usersPage: newPage,
    })
  }

  const handleChangeRowsPerPage = (event) => {
    handlePagination({
      usersPage: 0,
      usersRowsPerPage: event.target.value,
    })
  }

  const { usersRowsPerPage, usersPage } = pagination

  return (
    <TablePagination
      sx={{
        minHeight: '10vh',
      }}
      rowsPerPageOptions={[2, 3]}
      component="div"
      count={adminUsers.length}
      rowsPerPage={usersRowsPerPage}
      page={usersPage}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}

export default UserTablePagination
