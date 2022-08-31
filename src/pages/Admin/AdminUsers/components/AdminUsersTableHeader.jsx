import React from 'react'
import { TableCell, TableHead, TableRow } from '@mui/material'

import Localizator from '../../../../common/components/Localizator'

const AdminUsersTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID </TableCell>
        <TableCell align="right">
          <Localizator str="Firstname" />
        </TableCell>
        <TableCell align="right">
          <Localizator str="Lastname" />
        </TableCell>
        <TableCell align="right">
          <Localizator str="Email" />
        </TableCell>
        <TableCell align="right">
          <Localizator str="Username" />
        </TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
    </TableHead>
  )
}

export default AdminUsersTableHeader
