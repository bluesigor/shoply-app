import React, { useState } from 'react'
import { DeleteForever } from '@mui/icons-material'
import { Stack, Fade, Popper, IconButton, Button } from '@mui/material'
import { Box } from '@mui/system'

import useAdminCRUD from '../../../../utils/hooks/useAdminCRUD'
import Localizator from '../../../../common/components/Localizator'

const AdminRemovePopup = ({ id }) => {
  const { removeProduct } = useAdminCRUD()

  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setOpen((previousOpen) => !previousOpen)
  }

  const canBeOpen = open && Boolean(anchorEl)
  const popId = canBeOpen ? 'transition-popper' : undefined

  return (
    <>
      <IconButton aria-describedby={popId} type="button" onClick={handleClick}>
        <DeleteForever />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                maxWidth: '300px',
                display: 'flex',
                border: 1,
                p: 1,
                bgcolor: 'background.paper',
                flexDirection: 'column',
              }}
            >
              <Localizator str="Are you sure you want to delete item?" />
              <Stack display="flex" direction="row">
                <Button onClick={() => removeProduct(id)}>
                  <Localizator str="Remove" />
                </Button>
                <Button onClick={() => setOpen(false)}>
                  <Localizator str="Cancel" />
                </Button>
              </Stack>
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default AdminRemovePopup
