import { TitleOutlined } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

const ModalTitle = ({ onChange, title, error }) => {
  const handleTitle = (e) => {
    onChange((prev) => {
      return {
        ...prev,
        title: e.target.value,
      }
    })
  }

  return (
    <TextField
      error={error}
      helperText={error ? 'Please enter title.' : ''}
      fullWidth
      sx={{ marginTop: '20px', padding: '10px' }}
      autoFocus={true}
      onChange={handleTitle}
      placeholder="type title for new product"
      value={title}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <TitleOutlined />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default ModalTitle
