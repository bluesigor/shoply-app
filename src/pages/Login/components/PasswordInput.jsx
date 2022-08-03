import { LockOutlined } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'
import useLogin from '../../../utils/hooks/useLogin'

const PasswordInput = () => {
  const { inputData, error, handlePass } = useLogin()
  const { pass } = inputData
  return (
    <TextField
      error={error}
      type="password"
      helperText={error ? 'Please type your pass.' : ''}
      value={pass}
      onChange={handlePass}
      sx={{
        marginTop: '100px',
      }}
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockOutlined />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default PasswordInput
