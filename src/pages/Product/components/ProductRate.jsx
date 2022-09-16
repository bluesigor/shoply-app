import { Rating } from '@mui/material'
import React from 'react'
import { useNotificationContext } from '../../../context/NotificationContext'

const ProductRate = ({ rating }) => {
  const { setNotificationOpen } = useNotificationContext()

  return (
    <Rating
      onClick={() => setNotificationOpen('We really appreciate your feedback!')}
      value={rating}
      sx={{
        marginTop: '20px',
      }}
    />
  )
}

export default ProductRate
