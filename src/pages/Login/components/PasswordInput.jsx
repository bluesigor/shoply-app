import React from 'react'
import { LockOutlined } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'

const PasswordInput = ({ value, error, onChange }) => {
  const handlePass = (e) => {
    onChange((prev) => {
      return {
        ...prev,
        pass: e.target.value,
      }
    })
  }
  return (
    <TextField
      error={error}
      type="password"
      helperText={error ? 'Please type your pass.' : ''}
      value={value}
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
