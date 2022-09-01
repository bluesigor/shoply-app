import React from 'react'
import { Button, TableCell, TableRow } from '@mui/material'

import { useAdminDataContext } from '../../../../context/AdminUsersDataContext'
import { useNotificationContext } from '../../../../context/NotificationContext'

const BlockedUserRow = ({ id, firstname, lastname, email, username }) => {
  const { removeBlockedUser, blockedUsers } = useAdminDataContext()
  const { setNotificationOpen } = useNotificationContext()

  const handleBlock = () => {
    const tempUser = blockedUsers.find((user) => user.id === id)
    removeBlockedUser(tempUser.id)
    setNotificationOpen(`User ${tempUser.id} was blocked forever!`)
  }

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="right">{firstname}</TableCell>
      <TableCell align="right">{lastname}</TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="center">{username}</TableCell>
      <TableCell
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Button variant="outlined" color="inherit" onClick={handleBlock}>
          Block Forever
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default BlockedUserRow
