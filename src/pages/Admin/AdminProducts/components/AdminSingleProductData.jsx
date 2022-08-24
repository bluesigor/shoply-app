import React from 'react'
import { DeleteForever } from '@mui/icons-material'
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material'

import Localizator from '../../../../common/components/Localizator'
import AdminEditProduct from '../AdminEditProduct/AdminEditProduct'
import useAdminCRUD from '../../../../utils/hooks/useAdminCRUD'

const AdminSingleProductData = ({ product, id, count, title, price }) => {
  const { removeProduct } = useAdminCRUD()

  return (
    <>
      <TableBody>
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
            <IconButton onClick={() => removeProduct(id)}>
              <DeleteForever />
            </IconButton>
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </>
  )
}

export default AdminSingleProductData
