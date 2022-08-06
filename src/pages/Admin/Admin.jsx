import React from 'react'
import { Paper, Typography } from '@mui/material'

import { useUserDataContext } from '../../context/UserDataContext'

const Admin = () => {
  const { userData } = useUserDataContext()

  return (
    <Paper
      sx={{
        margin: '130px',
      }}
    >
      <Typography variant="p" component="h4">
        Welcome {userData.nickname} Admin
      </Typography>
    </Paper>
  )
}

export default Admin
