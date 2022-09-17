import React, { useState } from 'react'
import { Box, Button, Modal } from '@mui/material'

import ModalQuantity from './components/ModalQuantity'
import ModalHeader from './components/ModalHeader'
import ModalPrice from './components/ModalPrice'
import ModalTitle from './components/ModalTitle'
import Localizator from '../../../common/components/Localizator'
import useAddAdminData from '../../../utils/hooks/useAddAdminData'

import { useAdminDataContext } from '../../../context/AdminUsersDataContext'
import { useNotificationContext } from '../../../context/NotificationContext'
import { validateProduct } from '../../../utils/helpers/validateProduct'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  backgroundColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
  '@media (min-width:500px)': {
    width: 500,
    p: 6,
  },
}

const AdminNewProductModal = () => {
  const [openModal, setOpenModal] = useState(false)
  const [error, setError] = useState(false)
  const [productInputData, setProductInputData] = useState({
    title: '',
    price: 0,
    rating: {
      count: 0,
    },
    error: false,
    id: '',
  })

  const { adminProducts, addNewProduct } = useAdminDataContext()
  const { setNotificationOpen } = useNotificationContext()

  const { addData } = useAddAdminData()

  const handleOpen = () => setOpenModal(true)

  const handleClose = () => {
    setOpenModal(false)

    setProductInputData({
      title: '',
      price: 0,
      rating: {
        count: 0,
      },
      id: '',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = validateProduct(productInputData)

    const {
      title,
      price,
      rating: { count },
    } = productInputData

    if (!isValid) {
      setError(true)
    }

    if (isValid) {
      const exist = adminProducts.find((product) => product.title === title)

      if (exist) {
        setNotificationOpen(`${title} already in your list, you can edit it!`)
      } else {
        addNewProduct({
          title: title,
          price: price,
          rating: { count: +count },
          error: false,
          id: Math.random().toString(36).substr(2, 9),
        })

        addData(productInputData)

        setNotificationOpen(`${title} was added to your list!`)

        setError(false)
      }

      handleClose()
    }
  }

  return (
    <>
      <Button color="inherit" variant="outlined" onClick={handleOpen}>
        <Localizator str="Add new product" />
      </Button>
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
            error={error}
          />
          <ModalPrice
            onChange={setProductInputData}
            price={productInputData.price}
            error={error}
          />

          <ModalQuantity
            onChange={setProductInputData}
            count={productInputData.rating.count}
            error={error}
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
