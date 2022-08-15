import { TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

import Localizator from '../../../common/components/Localizator'

const ShoppingCardHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Localizator str="Product" />
        </TableCell>
        <TableCell align="right">
          <Localizator str="Price" />
        </TableCell>
        <TableCell align="center">
          <Localizator str="Quantity" />
        </TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
    </TableHead>
  )
}

export default ShoppingCardHeader
