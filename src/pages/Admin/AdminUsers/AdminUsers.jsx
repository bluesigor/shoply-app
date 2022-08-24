import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React from 'react'

import Localizator from '../../../common/components/Localizator'
import { useAdminDataContext } from '../../../context/AdminUsersDataContext'
import AdminUsersData from './AdminUsersData'

const AdminUsers = () => {
  const { adminUsers } = useAdminDataContext()

  const users = adminUsers.map((user) => {
    const {
      id,
      name: { firstname, lastname },
      username,
      email,
    } = user

    return (
      <AdminUsersData
        key={id}
        id={id}
        firstname={firstname}
        username={username}
        email={email}
        lastname={lastname}
      />
    )
  })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '650px' }} aria-label="caption table">
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
          </TableRow>
        </TableHead>
        {users}
      </Table>
    </TableContainer>
  )
}

export default AdminUsers
