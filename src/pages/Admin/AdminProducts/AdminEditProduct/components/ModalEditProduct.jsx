import React, { useState } from 'react'
import { Box, Button, Modal } from '@mui/material'

import { useNotificationContext } from '../../../../../context/NotificationContext'
import { useAdminDataContext } from '../../../../../context/AdminUsersDataContext'

import ModalEditHeader from './ModalEditHeader'
import ModalEditPrice from './ModalEditPrice'
import ModalEditQuantity from './ModalEditQuantity'
import ModalEditTitle from './ModalEditTitle'
import Localizator from '../../../../../common/components/Localizator'
import { validateProduct } from '../../../../../utils/helpers/validateProduct'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  backgroundColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 6,
}

const ModalEditProduct = ({ open, handleClose, product }) => {
  const { setNotificationOpen } = useNotificationContext()
  const { updateAdminProductsData } = useAdminDataContext()

  const [editProduct, setEditProduct] = useState({
    title: product.title,
    price: product.price,
    rating: {
      count: product.rating.count,
    },
    id: product.id,
  })

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = validateProduct(editProduct)

    if (!isValid) {
      setError(true)
    }

    if (isValid) {
      updateAdminProductsData(editProduct.id, editProduct)

      setNotificationOpen(`${editProduct.title} was successfuly edited!`)

      setError(false)

      handleClose()
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" onSubmit={handleSubmit} sx={style}>
        <ModalEditHeader handleClose={handleClose} />
        <ModalEditTitle
          title={editProduct.title}
          error={error}
          onChange={setEditProduct}
        />
        <ModalEditPrice
          price={editProduct.price}
          error={error}
          onChange={setEditProduct}
        />

        <ModalEditQuantity
          count={editProduct.rating.count}
          error={error}
          onChange={setEditProduct}
        />

        <Button
          sx={{
            padding: '10px',
            marginTop: '30px',
            border: '1px solid lightgrey',
          }}
          type="submit"
          color="inherit"
        >
          <Localizator str="Edit Product" />
        </Button>
      </Box>
    </Modal>
  )
}

export default ModalEditProduct
