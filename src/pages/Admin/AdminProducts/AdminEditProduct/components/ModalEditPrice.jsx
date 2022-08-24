import { PriceChange } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

const ModalEditPrice = ({ price, onChange, error }) => {
  const handlePrice = (e) => {
    onChange((prev) => {
      return {
        ...prev,
        price: e.target.value,
      }
    })
  }

  return (
    <TextField
      error={error}
      helperText={error ? 'Please enter price.' : ''}
      fullWidth
      sx={{ marginTop: '20px', padding: '10px' }}
      autoFocus={true}
      type="number"
      onChange={handlePrice}
      value={price}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PriceChange />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default ModalEditPrice
