import { AccountCircle } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import useLogin from '../../../utils/hooks/useLogin'

const EmailInput = () => {
  const { error, handleEmail, inputData } = useLogin()
  const { email } = inputData
  return (
    <TextField
      error={error}
      helperText={error ? 'Please type your email.' : ''}
      autoFocus={true}
      value={email}
      onChange={handleEmail}
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default EmailInput
