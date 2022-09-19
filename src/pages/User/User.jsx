import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import { useUserDataContext } from '../../context/UserDataContext'
import Localizator from '../../common/components/Localizator'

const User = () => {
  const { userData } = useUserDataContext()

  return (
    <Box height="64vh">
      <Typography m={6} variant="h4" component="p">
        <Localizator str="Welcome" />
        <br />
        <span>{userData.email}</span>
      </Typography>
    </Box>
  )
}

export default User
