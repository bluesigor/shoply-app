import React from 'react'
import { Modal, Table, TableContainer } from '@mui/material'

import OrderTableHeader from './OrderTableHeader'
import useGetOrder from '../../../../../utils/hooks/useGetOrder'
import OrdersTableBody from './OrdersTableBody'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
}

const OrderTableModal = ({ id, isOpen, setClose }) => {
  const [orders] = useGetOrder({ id })

  return (
    <Modal
      open={isOpen}
      onClose={setClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <TableContainer sx={style}>
        <Table>
          <OrderTableHeader />
          <OrdersTableBody orders={orders} />
        </Table>
      </TableContainer>
    </Modal>
  )
}

export default OrderTableModal
