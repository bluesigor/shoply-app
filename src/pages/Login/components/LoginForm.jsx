import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useLoginStyle } from '../../../assets/styles/useLoginStyle'
import useLogin from '../../../utils/hooks/useLogin'
import AdminCheckbox from './AdminCheckbox'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'

const LoginForm = () => {
  const { handleSubmit } = useLogin()
  const classes = useLoginStyle()
  return (
    <Grid
      p={{ xs: '6', md: '12' }}
      direction="column"
      position="relative"
      container
    >
      <Typography
        textAlign="center"
        variant="h3"
        component="p"
        textTransform="uppercase"
      >
        Login
      </Typography>
      <Box onSubmit={handleSubmit} component="form" className={classes.root}>
        <EmailInput />
        <PasswordInput />
        <AdminCheckbox />
        <Button
          color="inherit"
          type="submit"
          sx={{
            marginTop: '40px',
          }}
          variant="outlined"
        >
          Login
        </Button>
      </Box>
    </Grid>
  )
}

export default LoginForm
