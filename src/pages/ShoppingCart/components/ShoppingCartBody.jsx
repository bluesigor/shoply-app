import React from 'react'
import { Add, Delete, Remove } from '@mui/icons-material'
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material'

import { useGetProducts } from '../../../services/getProducts/getProducts'
import Localizator from '../../../common/components/Localizator'
import ShoppingCartSummary from './ShoppingCartSummary'

const ShoppingCardBody = () => {
  const { productsData } = useGetProducts()
  const products = productsData.slice(0, 4)

  return (
    <TableBody>
      {products.map((product) => {
        const { title, id, price, rating, image } = product
        return (
          <TableRow
            sx={{
              border: '1px solid inherit',
              borderRadius: '10px',
              '&:last-child td, &:last-child th': { border: 0 },
            }}
            key={id}
          >
            <TableCell
              sx={{
                padding: '20px 0px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              component="th"
              scope="row"
            >
              <img width="100px" height="100px" src={image} alt={title} />
              <Localizator sx={{ textAlign: 'center' }} str={title} />
            </TableCell>
            <TableCell align="right">{price}$</TableCell>
            <TableCell align="center">
              <IconButton color="inherit">
                <Add />
              </IconButton>
              {rating.count}
              <IconButton xcolor="inherit">
                <Remove />
              </IconButton>
            </TableCell>
            <TableCell align="right">
              <IconButton>
                <Delete />
              </IconButton>
            </TableCell>
          </TableRow>
        )
      })}
      <ShoppingCartSummary />
    </TableBody>
  )
}

export default ShoppingCardBody
