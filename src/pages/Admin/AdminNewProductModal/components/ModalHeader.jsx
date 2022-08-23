import React from 'react'
import { Close } from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'

import Localizator from '../../../../common/components/Localizator'

const ModalHeader = ({ handleClose }) => {
  return (
    <Stack direction="column" maxWidth="100%">
      <IconButton
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        onClick={handleClose}
      >
        <Close />
      </IconButton>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <Localizator str="Add new Product by simply submitting the form!" />
      </Typography>
    </Stack>
  )
}

export default ModalHeader
