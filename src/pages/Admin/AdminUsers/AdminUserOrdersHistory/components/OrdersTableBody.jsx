import React from 'react'
import { TableBody, TableCell, TableRow, Typography } from '@mui/material'

import Localizator from '../../../../../common/components/Localizator'

const OrdersTableBody = ({ orders }) => {
  if (orders === null)
    return (
      <TableBody>
        <TableRow>
          <TableCell>
            <Localizator str="User didn`t make order yet." />
          </TableCell>
        </TableRow>
      </TableBody>
    )

  const { id, products } = orders
  const product = products.map((item) => {
    const { productId, quantity } = item
    return (
      <TableCell key={productId} component="th" scope="row">
        <Typography>Product ID - {productId}</Typography>
        <br />
        <Typography>Product quantity: {quantity}</Typography>
      </TableCell>
    )
  })

  return (
    <TableBody>
      <TableRow>
        <TableCell component="th" scope="row">
          {id}
        </TableCell>
        {product}
      </TableRow>
    </TableBody>
  )
}

export default OrdersTableBody
