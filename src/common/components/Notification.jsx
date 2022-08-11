import { Snackbar } from '@mui/material'
import React from 'react'
import { useNotificationContext } from '../../context/NotificationContext'

const Notification = () => {
  const { setNotificationClose, open, message } = useNotificationContext()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setNotificationClose()
  }

  return (
    <Snackbar
      message={message}
      autoHideDuration={3000}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    />
  )
}

export default Notification
