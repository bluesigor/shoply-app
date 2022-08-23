import React from 'react'
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material'
import { DeleteForever, Edit } from '@mui/icons-material'

const AdminUsersData = ({ id, firstname, username, email, lastname }) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell component="th" scope="row">
          {id}
        </TableCell>
        <TableCell align="right">{firstname}</TableCell>
        <TableCell align="right">{lastname}</TableCell>
        <TableCell align="right">{email}</TableCell>
        <TableCell align="right">{username}</TableCell>
        <TableCell align="right">
          <IconButton>
            <Edit />
          </IconButton>
        </TableCell>
        <TableCell align="right">
          <IconButton>
            <DeleteForever />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableBody>
  )
}

export default AdminUsersData
