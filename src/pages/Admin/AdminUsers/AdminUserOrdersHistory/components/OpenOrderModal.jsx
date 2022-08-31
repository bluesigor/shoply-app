import { HistoryTwoTone } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const OpenOrderModal = ({ setOpen }) => {
  return (
    <IconButton onClick={setOpen}>
      <HistoryTwoTone />
    </IconButton>
  )
}

export default OpenOrderModal
