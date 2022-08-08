import React from 'react'

import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useUserDataContext } from '../../context/UserDataContext'
import { useUserSettingsContext } from '../../context/UserSettingsContext'
import Localizator from '../../common/components/Localizator'

const User = () => {
  const { userData } = useUserDataContext()
  const { language } = useUserSettingsContext()

  return (
    <Box>
      <Paper>
        <Typography m={6} variant="h4" component="p">
          <Localizator lang={language} str="Welcome " />
          <br />
          {userData.email}
        </Typography>
      </Paper>
    </Box>
  )
}

export default User
