import React, { useState } from 'react'
import { Add } from '@mui/icons-material'
import { Box, Button, IconButton, Modal } from '@mui/material'

import ModalQuantity from './components/ModalQuantity'
import ModalHeader from './components/ModalHeader'
import ModalPrice from './components/ModalPrice'
import ModalTitle from './components/ModalTitle'
import { useAdminDataContext } from '../../../context/AdminUsersDataContext'
import { useNotificationContext } from '../../../context/NotificationContext'
import Localizator from '../../../common/components/Localizator'

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

const AdminNewProductModal = () => {
  const [openModal, setOpenModal] = useState(false)
  const [productInputData, setProductInputData] = useState({
    title: '',
    price: 0,
    rating: {
      count: 0,
    },
    error: false,
    id: '',
  })

  const { adminProducts, setAdminProductsData } = useAdminDataContext()
  const { setNotificationOpen } = useNotificationContext()

  const handleOpen = () => setOpenModal(true)

  const handleClose = () => {
    setOpenModal(false)

    setProductInputData({
      title: '',
      price: 0,
      rating: {
        count: 0,
      },
      error: false,
      id: '',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const {
      title,
      price,
      rating: { count },
    } = productInputData

    if (!title || price <= 0 || count <= 0) {
      setProductInputData((prev) => {
        return {
          ...prev,
          error: true,
        }
      })
    }

    if (title && price > 0 && count > 0) {
      const exist = adminProducts.find((product) => product.title === title)

      if (exist) {
        setNotificationOpen(`${title} already in your list, you can edit it!`)
      } else {
        setAdminProductsData([
          ...adminProducts,
          {
            title: title,
            price: price,
            rating: { count: +count },
            error: false,
            id: Math.random().toString(36).substr(2, 9),
          },
        ])
        setNotificationOpen(`${title} was added to your list!`)
      }

      handleClose()
    }
  }

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Add />
      </IconButton>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={handleSubmit} sx={style}>
          <ModalHeader handleClose={handleClose} />
          <ModalTitle
            onChange={setProductInputData}
            title={productInputData.title}
            error={productInputData.error}
          />
          <ModalPrice
            onChange={setProductInputData}
            price={productInputData.price}
            error={productInputData.error}
          />

          <ModalQuantity
            onChange={setProductInputData}
            count={productInputData.rating.count}
            error={productInputData.error}
          />

          <Button
            sx={{
              padding: '10px',
              marginTop: '30px',
              border: '1px solid lightgrey',
            }}
            color="inherit"
            type="submit"
          >
            <Localizator str="Add Product" />
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default AdminNewProductModal
