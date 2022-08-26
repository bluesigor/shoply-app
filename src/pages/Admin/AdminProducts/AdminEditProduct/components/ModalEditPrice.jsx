import React from 'react'
import { PriceChange } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'

const ModalEditPrice = ({ price, onChange, error }) => {
  const handlePrice = (e) => {
    onChange((prev) => {
      if (e.target.value > 0) {
        return {
          ...prev,
          price: +e.target.value,
        }
      }

      return {
        ...prev,
        price: 0,
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
