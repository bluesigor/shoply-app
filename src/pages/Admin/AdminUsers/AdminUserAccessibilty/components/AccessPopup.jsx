import React from 'react'
import { Accessibility } from '@mui/icons-material'
import { IconButton } from '@mui/material'

const AccessPopup = ({ setAnchorEl, anchorEl, open, setOpen }) => {
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen((previousOpen) => !previousOpen)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const popId = canBeOpen ? 'transition-popper' : undefined

  return (
    <IconButton aria-describedby={popId} type="button" onClick={handleClick}>
      <Accessibility />
    </IconButton>
  )
}

export default AccessPopup
