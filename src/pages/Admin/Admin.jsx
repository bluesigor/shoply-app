import React from 'react'
import { Paper, Typography } from '@mui/material'

import { useUserDataContext } from '../../context/UserDataContext'
import { useUserSettingsContext } from '../../context/UserSettingsContext'
import Localizator from '../../common/components/Localizator'

const Admin = () => {
  const { userData } = useUserDataContext()
  const { language } = useUserSettingsContext()

  return (
    <Paper
      sx={{
        margin: '130px',
      }}
    >
      <Typography variant="p" component="h4">
        <Localizator
          str={`Welcome ${userData.nickname} Admin`}
          lang={language}
        />
      </Typography>
    </Paper>
  )
}

export default Admin
