import { Box, Container } from '@mui/material'
import React from 'react'
import LoginForm from './components/LoginForm'
import LoginLogo from './components/LoginLogo'

const Login = () => {
  return (
    <Container>
      <Box p={8} display="flex">
        <LoginLogo />
        <LoginForm />
      </Box>
    </Container>
  )
}

export default Login
