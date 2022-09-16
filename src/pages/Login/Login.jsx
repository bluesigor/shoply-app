import React from 'react'
import { Box, Container } from '@mui/material'

import LoginForm from './components/LoginForm'
import LoginLogo from './components/LoginLogo'

const Login = () => {
  return (
    <Container
      sx={{
        height: '70vh',
      }}
    >
      <Box p={6} display="flex">
        <LoginLogo />
        <LoginForm />
      </Box>
    </Container>
  )
}

export default Login
