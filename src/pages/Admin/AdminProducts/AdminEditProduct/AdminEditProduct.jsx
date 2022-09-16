import { TableCell } from '@mui/material'
import React from 'react'

import useModalEditProduct from '../../../../utils/hooks/useModalEditProduct'

import ModalEditProduct from './components/ModalEditProduct'
import ModalOpenButton from './components/ModalOpenButton'

const AdminEditProduct = ({ product }) => {
  const [handleOpen, handleClose, open] = useModalEditProduct()

  return (
    <TableCell align="center">
      <ModalOpenButton handleOpen={handleOpen} />
      <ModalEditProduct
        open={open}
        handleClose={handleClose}
        product={product}
      />
    </TableCell>
  )
}

export default AdminEditProduct
