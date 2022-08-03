import { Paper, Typography } from '@mui/material'
import React from 'react'

const Admin = () => {
  return (
    <Paper
      sx={{
        margin: '130px',
      }}
    >
      <Typography variant="p" component="h4">
        Welcome Admin
      </Typography>
    </Paper>
  )
}

export default Admin
