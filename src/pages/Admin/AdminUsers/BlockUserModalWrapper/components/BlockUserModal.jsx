import React from 'react'
import { CloseSharp } from '@mui/icons-material'
import { Modal, Stack, Typography, IconButton, Button } from '@mui/material'
import { Box } from '@mui/system'

import Localizator from '../../../../../common/components/Localizator'
import { useAdminDataContext } from '../../../../../context/AdminUsersDataContext'
import { useNotificationContext } from '../../../../../context/NotificationContext'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 6,
}

const BlockUserModal = ({ id, isOpen, setClose }) => {
  const { setBlockedUser, adminUsers } = useAdminDataContext()
  const { setNotificationOpen } = useNotificationContext()

  const handleBlockUser = () => {
    const tempUser = adminUsers.find((user) => user.id === id)

    setBlockedUser(tempUser.id)
    setNotificationOpen(`User ${id} was blocked!`)
  }

  return (
    <Modal
      open={isOpen}
      onClose={setClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack display="flex" alignItems="flex-end">
          <IconButton onClick={setClose}>
            <CloseSharp />
          </IconButton>
        </Stack>
        <Typography marginY={4} textAlign="center" component="p" variant="h5">
          <Localizator str="Block user?" />
        </Typography>
        <Stack
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          marginY={2}
          marginX={10}
        >
          <Button onClick={handleBlockUser} variant="contained" color="inherit">
            Confirm
          </Button>
          <Button onClick={setClose} variant="contained" color="inherit">
            Cancel
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}

export default BlockUserModal
