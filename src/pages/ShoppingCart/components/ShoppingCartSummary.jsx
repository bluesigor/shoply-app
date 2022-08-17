import React from 'react'
import { TableCell, TableRow } from '@mui/material'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'

import { useShoppingCartContext } from '../../../context/ShoppingCartContext'
import Localizator from '../../../common/components/Localizator'

const ShoppingCardSummary = () => {
  const { cart, total } = useShoppingCartContext()

  const totalCartFee = Math.round(
    cart.map((item) => item.shippingFee).reduce((acc, item) => acc + item),
  )
  const subtotalGeneral = Math.round(
    cart.map((item) => item.subtotal).reduce((acc, item) => acc + item),
  )

  return (
    <>
      <TableRow>
        <TableCell rowSpan={6} />
        <TableCell colSpan={1}>
          <Localizator str="Subtotal" />
        </TableCell>
        <TableCell align="right">{subtotalGeneral}$</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Localizator str="Shipping fee" />
        </TableCell>
        <TableCell align="right">{totalCartFee}$</TableCell>
      </TableRow>
      <TableRow>
        <TableCell rowSpan={4}>
          <Localizator str="Total" />
        </TableCell>
        <TableCell>
          <HorizontalRuleIcon />
        </TableCell>
        <TableCell align="right">{total}$</TableCell>
      </TableRow>
    </>
  )
}

export default ShoppingCardSummary
