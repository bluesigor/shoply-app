import React from 'react'
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import AdminProductsData from './AdminProductsData'
import AdminNewProductModal from '../AdminNewProductModal/AdminNewProductModal'
import Localizator from '../../../common/components/Localizator'
import { useAdminDataContext } from '../../../context/AdminUsersDataContext'

const AdminProducts = () => {
  const { adminProducts } = useAdminDataContext()

  const products = adminProducts.map((prod) => {
    const {
      id,
      title,
      rating: { count },
      price,
    } = prod

    return (
      <AdminProductsData
        key={id}
        count={count}
        id={id}
        title={title}
        price={price}
      />
    )
  })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '650px' }} aria-label="caption table">
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
        {products}
      </Table>
    </TableContainer>
  )
}

export default AdminProducts
