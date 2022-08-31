import { TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'

const OrdersTableBody = ({ orders }) => {
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
