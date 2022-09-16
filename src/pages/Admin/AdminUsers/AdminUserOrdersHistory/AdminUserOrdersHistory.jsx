import React from 'react'
import { TableCell } from '@mui/material'

import useModal from '../../../../utils/hooks/useModal'
import OpenOrderModal from './components/OpenOrderModal'
import OrderTableModal from './components/OrderTableModal'

const AdminUserOrdersHistory = ({ id }) => {
  const { isOpen, setOpen, setClose } = useModal()

  return (
    <TableCell align="right">
      <OpenOrderModal setOpen={setOpen} />
      <OrderTableModal id={id} setClose={setClose} isOpen={isOpen} />
    </TableCell>
  )
}

export default AdminUserOrdersHistory
