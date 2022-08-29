import React from 'react'
import { TableCell, TableRow } from '@mui/material'

import Localizator from '../../../../common/components/Localizator'
import AdminEditProduct from '../AdminEditProduct/AdminEditProduct'
import AdminRemovePopup from './AdminRemovePopup'

const AdminSingleProductData = ({ product, id, count, title, price }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="left">
        <Localizator str={title} />
      </TableCell>
      <TableCell align="left">{price}</TableCell>
      <TableCell align="center">{count}</TableCell>
      <TableCell align="center">
        <AdminEditProduct product={product} />
      </TableCell>
      <TableCell align="left">
        <AdminRemovePopup id={id} />
      </TableCell>
    </TableRow>
  )
}

export default AdminSingleProductData
