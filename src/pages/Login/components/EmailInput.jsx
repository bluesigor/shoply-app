import React from 'react'
import { AccountCircle } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'

const EmailInput = ({ value, onChange, error }) => {
  const handleUpdate = (e) => {
    onChange((prev) => {
      return {
        ...prev,
        email: e.target.value,
      }
    })
  }
  return (
    <TextField
      error={error}
      helperText={error ? 'Please type your email.' : ''}
      autoFocus={true}
      value={value}
      onChange={handleUpdate}
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
