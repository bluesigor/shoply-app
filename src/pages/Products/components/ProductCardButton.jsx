import React from 'react'
import { ShoppingBag } from '@mui/icons-material'
import { Box, Button, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

import Localizator from '../../../common/components/Localizator'
import { useNotificationContext } from '../../../context/NotificationContext'
import useGetSingleProduct from '../../../services/getSingleProduct/getSingleProduct'

const ProductCardButton = ({ id }) => {
  const { setNotificationOpen } = useNotificationContext()

  const { exact_id, fetchSingleProductData } = useGetSingleProduct({ id })

  const handleMessage = () => {
    setNotificationOpen('Item was added to your basket')
  }

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Button onClick={fetchSingleProductData} color="inherit">
        <Link
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
          to={`/products/${exact_id}`}
        >
          <Localizator str="Details" />
        </Link>
      </Button>
      <IconButton onClick={handleMessage}>
        <ShoppingBag />
      </IconButton>
    </Box>
  )
}

export default ProductCardButton
