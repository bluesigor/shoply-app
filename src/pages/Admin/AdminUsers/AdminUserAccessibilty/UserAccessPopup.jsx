import React, { useState } from 'react'
import { TableCell } from '@mui/material'

import AccessPopup from './components/AccessPopup'
import AccessPopupBody from './components/AccessPopupBody'

const UserAccessPopup = ({ id, setIsAdmin, isAdmin }) => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <TableCell align="right">
      <AccessPopup
        setAnchorEl={setAnchorEl}
        anchorEl={anchorEl}
        open={open}
        setOpen={setOpen}
      />
      <AccessPopupBody
        isAdmin={isAdmin}
        anchorEl={anchorEl}
        open={open}
        setOpen={setOpen}
        setIsAdmin={setIsAdmin}
        id={id}
      />
    </TableCell>
  )
}

export default UserAccessPopup
