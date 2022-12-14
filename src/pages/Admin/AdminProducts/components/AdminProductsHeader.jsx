import React from 'react'
import { TableCell, TableHead, TableRow } from '@mui/material'

import Localizator from '../../../../common/components/Localizator'

const AdminProductsHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID </TableCell>
        <TableCell align="left">
          <Localizator str="Title" />
        </TableCell>
        <TableCell align="left">
          <Localizator str="Price" />
        </TableCell>
        <TableCell align="left">
          <Localizator str="Quantity" />
        </TableCell>
        <TableCell align="right">
          <Localizator str="Actions" />
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  )
}

export default AdminProductsHeader
