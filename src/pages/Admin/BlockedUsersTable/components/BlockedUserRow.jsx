import React from 'react'
import { Button, TableCell, TableRow } from '@mui/material'

import { useAdminDataContext } from '../../../../context/AdminUsersDataContext'
import { useNotificationContext } from '../../../../context/NotificationContext'
import Localizator from '../../../../common/components/Localizator'

const BlockedUserRow = ({ id, firstname, lastname, email, username }) => {
  const {
    removeBlockedUser,
    blockedUsers,
    unblockUser,
    showUsers,
  } = useAdminDataContext()
  const { setNotificationOpen } = useNotificationContext()

  const handleBlock = () => {
    const tempUser = blockedUsers.find((user) => (user.id === id ? user : null))

    showUsers()
    removeBlockedUser(tempUser.id)
    setNotificationOpen(`User ${tempUser.id} was blocked forever!`)
  }

  const handleUnblock = () => {
    const tempUser = blockedUsers.find((user) => (user.id === id ? user : null))

    showUsers()
    unblockUser(tempUser.id)
    setNotificationOpen(`User ${tempUser.id} was unblocked!`)
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
          justifyContent: 'space-around',
        }}
      >
        <Button variant="outlined" color="inherit" onClick={handleBlock}>
          <Localizator str="Block Forever" />
        </Button>
        <Button variant="outlined" color="inherit" onClick={handleUnblock}>
          <Localizator str="Unblock" />
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default BlockedUserRow
