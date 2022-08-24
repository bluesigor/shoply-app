import React, { useState } from 'react'
import { Button, IconButton, Modal } from '@mui/material'
import { Edit } from '@mui/icons-material'
import { Box } from '@mui/system'

import { useAdminDataContext } from '../../../../context/AdminUsersDataContext'
import { useNotificationContext } from '../../../../context/NotificationContext'

import ModalEditHeader from './components/ModalEditHeader'
import ModalEditTitle from './components/ModalEditTitle'
import ModalEditPrice from './components/ModalEditPrice'
import ModalEditQuantity from './components/ModalEditQuantity'
import Localizator from '../../../../common/components/Localizator'

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

const AdminEditProduct = ({ product }) => {
  const [editProduct, setEditProduct] = useState({
    title: product.title,
    price: product.price,
    rating: {
      count: +product.rating.count,
    },
    error: false,
    id: product.id,
  })

  const [open, setOpen] = useState(false)

  const { adminProducts, setAdminProductsData } = useAdminDataContext()
  const { setNotificationOpen } = useNotificationContext()

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const {
    id,
    title,
    price,
    rating: { count },
  } = editProduct

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || price <= 0 || count <= 0) {
      setEditProduct((prev) => {
        return {
          ...prev,
          error: true,
        }
      })
    }

    if (title && price > 0 && count > 0) {
      setAdminProductsData(
        adminProducts.map((item) =>
          item.id === id
            ? {
                ...editProduct,
              }
            : item,
        ),
      )

      setNotificationOpen(`${editProduct.title} was successfuly edited!`)
    }

    handleClose()
  }

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Edit />
      </IconButton>
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
            error={editProduct.error}
            onChange={setEditProduct}
          />
          <ModalEditPrice
            price={editProduct.price}
            error={editProduct.error}
            onChange={setEditProduct}
          />

          <ModalEditQuantity
            error={editProduct.error}
            count={editProduct.rating.count}
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
    </>
  )
}

export default AdminEditProduct
