import { Edit } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const ModalOpenButton = ({ handleOpen }) => {
  return (
    <IconButton onClick={handleOpen}>
      <Edit />
    </IconButton>
  )
}

export default ModalOpenButton
