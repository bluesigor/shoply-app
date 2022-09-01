import React, { useState } from 'react'
import { Typography, TableCell, TableRow } from '@mui/material'

import UserAccessPopup from '../AdminUserAccessibilty/UserAccessPopup'
import AdminUserOrdersHistory from '../AdminUserOrdersHistory/AdminUserOrdersHistory'
import AdminBlockUser from '../AdminBlockUser.jsx/AdminBlockUser'

const UserTableRow = ({ id, firstname, username, email, lastname }) => {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="right">{firstname}</TableCell>
      <TableCell align="right">{lastname}</TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{username}</TableCell>
      <UserAccessPopup setIsAdmin={setIsAdmin} id={id} />
      <AdminUserOrdersHistory id={id} />
      <AdminBlockUser id={id} />
      {isAdmin && (
        <TableCell align="right">
          <Typography align="right">Admin</Typography>
        </TableCell>
      )}
    </TableRow>
  )
}

export default UserTableRow