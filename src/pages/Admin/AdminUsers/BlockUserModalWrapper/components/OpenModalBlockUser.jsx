import React from 'react'
import { IconButton } from '@mui/material'
import { Block } from '@mui/icons-material'

const OpenModalBlockUser = ({ setOpen }) => {
  return (
    <IconButton onClick={setOpen}>
      <Block />
    </IconButton>
  )
}

export default OpenModalBlockUser
