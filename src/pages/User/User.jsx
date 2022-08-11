import React from 'react'
import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { useUserDataContext } from '../../context/UserDataContext'
import Localizator from '../../common/components/Localizator'

const User = () => {
  const { userData } = useUserDataContext()

  return (
    <Box>
      <Paper>
        <Typography m={6} variant="h4" component="p">
          <Localizator str="Welcome " />
          <br />
          {userData.email}
        </Typography>
      </Paper>
    </Box>
  )
}

export default User
