import { Grid } from '@mui/material'
import React from 'react'

import login from '../../../assets/images/login.svg'

const LoginLogo = () => {
  return (
    <Grid
      display={{
        xs: 'none',
        md: 'flex',
      }}
      item
    >
      <img src={login} alt="login" />
    </Grid>
  )
}

export default LoginLogo
