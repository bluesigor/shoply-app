import React from 'react'
import { Paper, Table, TableContainer } from '@mui/material'

import UsersTableHeader from '../AdminUsers/components/UsersTableHeader'
import BlockedUser from './components/BlockedUser'

const BlockedUsers = () => {
  return (
    <TableContainer
      sx={{
        minWidth: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      component={Paper}
    >
      <Table aria-label="caption table">
        <UsersTableHeader />
        <BlockedUser />
      </Table>
    </TableContainer>
  )
}

export default BlockedUsers
