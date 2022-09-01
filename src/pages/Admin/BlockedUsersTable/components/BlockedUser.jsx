import React from 'react'
import { TableBody } from '@mui/material'

import { useAdminDataContext } from '../../../../context/AdminUsersDataContext'
import BlockedUserRow from './BlockedUserRow'

const BlockedUser = () => {
  const { blockedUsers } = useAdminDataContext()

  return (
    <TableBody>
      {blockedUsers.map((user) => {
        const {
          id,
          name: { firstname, lastname },
          username,
          email,
        } = user

        return (
          <BlockedUserRow
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

export default BlockedUser
