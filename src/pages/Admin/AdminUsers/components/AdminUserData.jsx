import React from 'react'
import { TableBody } from '@mui/material'

import { useAdminDataContext } from '../../../../context/AdminUsersDataContext'
import UserTableRow from './UserTableRow'

const AdminUserData = () => {
  const { adminUsers, pagination } = useAdminDataContext()
  const { rowsPerPage, page } = pagination

  return (
    <TableBody>
      {adminUsers
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((user) => {
          const {
            id,
            name: { firstname, lastname },
            username,
            email,
          } = user

          return (
            <UserTableRow
              user={user}
              key={id}
              id={id}
              firstname={firstname}
              lastname={lastname}
              username={username}
              email={email}
            />
          )
        })}
    </TableBody>
  )
}

export default AdminUserData
