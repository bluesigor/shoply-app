import React, { useState } from 'react'
import { Modal, Box, Typography, IconButton, Button } from '@mui/material'
import { Delete } from '@mui/icons-material'

import useRemoveFromCart from '../../../utils/hooks/useRemoveFromCart'
import Localizator from '../../../common/components/Localizator'

const ShoppingModal = ({ product }) => {
  const { removeCart } = useRemoveFromCart()
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Delete />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            color="inherit"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <Localizator str="Warning" />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Localizator str="Are you sure you want to delete item from your cart?" />
          </Typography>
          <Button
            sx={{
              marginTop: '10px',
              border: '1px solid red',
              color: 'red',
            }}
            color="inherit"
            onClick={() => removeCart(product)}
          >
            <Localizator str="Remove Product" />
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default ShoppingModal
