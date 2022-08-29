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
import AdminSingleUser from './components/AdminSingleUser'

const AdminUsers = () => {
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
        <AdminSingleUser />
      </Table>
    </TableContainer>
  )
}

export default AdminUsers
