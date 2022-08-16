import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import Localizator from '../../../common/components/Localizator'
const ShoppingCardSummary = () => {
  return (
    <>
      <TableRow>
        <TableCell rowSpan={6} />
        <TableCell colSpan={1}>
          <Localizator str="Subtotal" />
        </TableCell>
        <TableCell align="right">100$</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Localizator str="Shipping fee" />
        </TableCell>
        <TableCell align="right">20$</TableCell>
      </TableRow>
      <TableRow>
        <TableCell rowSpan={4}>
          <Localizator str="Total" />
        </TableCell>
        <TableCell>
          <HorizontalRuleIcon />
        </TableCell>
        <TableCell align="right">100$</TableCell>
      </TableRow>
    </>
  )
}

export default ShoppingCardSummary
