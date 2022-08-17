import React from 'react'
import { Add, Remove } from '@mui/icons-material'
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material'

import { useShoppingCartContext } from '../../../context/ShoppingCartContext'
import Localizator from '../../../common/components/Localizator'
import useAddToCart from '../../../utils/hooks/useAddToCart'
import useRemoveFromCart from '../../../utils/hooks/useRemoveFromCart'
import ShoppingCartSummary from './ShoppingCartSummary'
import ShoppingModal from './ShoppingModal'

const ShoppingCardBody = () => {
  const { cart } = useShoppingCartContext()

  const { handleAddToCart } = useAddToCart()
  const { removeCartQuantity } = useRemoveFromCart()

  return (
    <TableBody>
      {cart.map((product) => {
        const { title, id, price, quantity, image } = product

        return (
          <TableRow
            sx={{
              marginBottom: '30px',
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
              <IconButton
                onClick={() => handleAddToCart(product)}
                color="inherit"
              >
                <Add />
              </IconButton>
              {quantity}
              <IconButton
                onClick={() => removeCartQuantity(product)}
                xcolor="inherit"
              >
                <Remove />
              </IconButton>
            </TableCell>
            <TableCell align="right">
              <ShoppingModal product={product} />
            </TableCell>
          </TableRow>
        )
      })}
      <ShoppingCartSummary />
    </TableBody>
  )
}

export default ShoppingCardBody
