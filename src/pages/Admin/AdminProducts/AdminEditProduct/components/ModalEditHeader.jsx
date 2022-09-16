import React from 'react'
import { Close } from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'

import Localizator from '../../../../../common/components/Localizator'

const ModalEditHeader = ({ handleClose }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        direction: 'column',
        alignItems: 'flex-end',
      }}
    >
      <IconButton onClick={handleClose}>
        <Close />
      </IconButton>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <Localizator str="Apply desired changes to already existing item!" />
      </Typography>
    </Stack>
  )
}

export default ModalEditHeader
