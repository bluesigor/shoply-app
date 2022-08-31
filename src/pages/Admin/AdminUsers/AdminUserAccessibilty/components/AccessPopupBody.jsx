import React from 'react'
import { Button, Fade, Popper, Stack } from '@mui/material'
import { Box } from '@mui/system'

import Localizator from '../../../../../common/components/Localizator'

import { useNotificationContext } from '../../../../../context/NotificationContext'

const AccessPopupBody = ({ id, setIsAdmin, setOpen, open, anchorEl }) => {
  const { setNotificationOpen } = useNotificationContext()

  const setUserAdmin = () => {
    setIsAdmin(true)
  }

  return (
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
            <Localizator str={`Make user an Admin?`} />
            <Stack display="flex" direction="row">
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => {
                  setUserAdmin()
                  setOpen(false)
                  setNotificationOpen(`Now userId:${id} has an admin rights.`)
                }}
              >
                <Localizator str="Confirm" />
              </Button>
              <Button
                sx={{
                  marginLeft: '10px',
                }}
                variant="outlined"
                color="inherit"
                onClick={() => setOpen(false)}
              >
                <Localizator str="Cancel" />
              </Button>
            </Stack>
          </Box>
        </Fade>
      )}
    </Popper>
  )
}

export default AccessPopupBody
