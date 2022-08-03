import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import useLogin from '../../utils/hooks/useLogin'

const User = () => {
  const { inputData } = useLogin()
  const { email } = inputData
  return (
    <Box>
      <Paper>
        <Typography m={6} variant="h4" component="p">
          Welcome {email}
        </Typography>
      </Paper>
    </Box>
  )
}

export default User
