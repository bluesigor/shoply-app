import React from 'react'
import { Box, Container } from '@mui/material'

import LoginForm from './components/LoginForm'
import LoginLogo from './components/LoginLogo'

const Login = () => {
  return (
    <Container
      sx={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        p={{ xs: 2, sm: 4, md: 6 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <LoginLogo />
        <LoginForm />
      </Box>
    </Container>
  )
}

export default Login
