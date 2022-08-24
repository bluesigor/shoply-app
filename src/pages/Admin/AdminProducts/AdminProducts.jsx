import React, { useState } from 'react'
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import AdminNewProductModal from '../AdminNewProductModal/AdminNewProductModal'
import Localizator from '../../../common/components/Localizator'
import AdminSingleProduct from './components/AdminSingleProduct'
import AdminProductPagination from './components/AdminProductPagination'

const AdminProducts = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  return (
    <>
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
              <TableCell align="right">
                <Localizator str="Actions" />
              </TableCell>
              <TableCell align="right">
                <Localizator str="Add New Product" />
              </TableCell>
              <TableCell align="right">
                <AdminNewProductModal />
              </TableCell>
            </TableRow>
          </TableHead>
          <AdminSingleProduct page={page} rowsPerPage={rowsPerPage} />
        </Table>
      </TableContainer>
      <AdminProductPagination
        page={page}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
      />
    </>
  )
}

export default AdminProducts
