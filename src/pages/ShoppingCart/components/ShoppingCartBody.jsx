import React from 'react'
import { Add, Remove } from '@mui/icons-material'
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material'

import { useShoppingCartContext } from '../../../context/ShoppingCartContext'
import { useNotificationContext } from '../../../context/NotificationContext'
import { useUserDataContext } from '../../../context/UserDataContext'
import Localizator from '../../../common/components/Localizator'
import useAddToCart from '../../../utils/hooks/useAddToCart'
import useRemoveFromCart from '../../../utils/hooks/useRemoveFromCart'
import ShoppingCartSummary from './ShoppingCartSummary'
import ShoppingModal from './ShoppingModal'

const ShoppingCardBody = () => {
  const { isAdmin, isLoggedIn } = useUserDataContext()
  const { setNotificationOpen } = useNotificationContext()
  const { cart } = useShoppingCartContext()

  const { handleAddToCart } = useAddToCart()
  const { removeCartQuantity } = useRemoveFromCart()

  const handleNotificationAdd = () => {
    setNotificationOpen(
      isLoggedIn && !isAdmin
        ? 'Item was added to your basket'
        : 'You have to Sign in first!',
    )
  }

  const handleNotificationRemove = () => {
    setNotificationOpen(
      isLoggedIn && !isAdmin
        ? 'Item was removed from your basket'
        : 'You have to Sign in first!',
    )
  }

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
              <img width="60px" height="80px" src={image} alt={title} />
              <Localizator sx={{ textAlign: 'center' }} str={title} />
            </TableCell>
            <TableCell align="right">{price}$</TableCell>
            <TableCell align="center">
              <IconButton
                onClick={() => {
                  handleAddToCart(product)
                  handleNotificationAdd()
                }}
                color="inherit"
              >
                <Add />
              </IconButton>
              {quantity}
              <IconButton
                onClick={() => {
                  removeCartQuantity(product)
                  handleNotificationRemove()
                }}
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
