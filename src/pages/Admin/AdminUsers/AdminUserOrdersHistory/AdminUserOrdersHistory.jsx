import { TableCell } from '@mui/material'
import React from 'react'
import useOrderModal from '../../../../utils/hooks/useOrderModal'

import OpenOrderModal from './components/OpenOrderModal'
import OrderTableModal from './components/OrderTableModal'

const AdminUserOrdersHistory = ({ id }) => {
  const { isOpen, setOpen, setClose } = useOrderModal()

  return (
    <TableCell align="right">
      <OpenOrderModal setOpen={setOpen} />
      <OrderTableModal id={id} setClose={setClose} isOpen={isOpen} />
    </TableCell>
  )
}

export default AdminUserOrdersHistory
