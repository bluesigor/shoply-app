import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import Localizator from '../../../common/components/Localizator'

import { useUserDataContext } from '../../../context/UserDataContext'

const AdminTitle = () => {
  const { userData } = useUserDataContext()

  return (
    <Box
      sx={{
        maxHeight: '90px',
        margin: '40px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="p" component="h3">
        <Localizator str={`Welcome ${userData.nickname} Admin.`} />
      </Typography>
    </Box>
  )
}

export default AdminTitle
