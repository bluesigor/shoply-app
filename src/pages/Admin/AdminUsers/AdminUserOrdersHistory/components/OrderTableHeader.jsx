import { TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import Localizator from '../../../../../common/components/Localizator'

const OrderTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Localizator str="Order ID" />
        </TableCell>
        <TableCell align="left">
          <Localizator str="Products" />
        </TableCell>
      </TableRow>
    </TableHead>
  )
}

export default OrderTableHeader
