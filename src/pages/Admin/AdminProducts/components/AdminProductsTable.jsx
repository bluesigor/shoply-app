import React from 'react'
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import Localizator from '../../../../common/components/Localizator'
import AdminSingleProduct from './AdminSingleProduct'

const AdminProductsTable = ({ page, rowsPerPage }) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: '650px', position: 'relative', marginBottom: '50px' }}
        aria-label="caption table"
      >
        <TableHead>
          <TableRow>
            <TableCell>ID </TableCell>
            <TableCell align="left">
              <Localizator str="Title" />
            </TableCell>
            <TableCell align="left">
              <Localizator str="Price" />
            </TableCell>
            <TableCell align="left">
              <Localizator str="Quantity" />
            </TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="center">
              <Localizator str="Actions" />
            </TableCell>
          </TableRow>
        </TableHead>
        <AdminSingleProduct page={page} rowsPerPage={rowsPerPage} />
      </Table>
    </TableContainer>
  )
}

export default AdminProductsTable
