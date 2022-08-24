import React from 'react'
import { ProductionQuantityLimits } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'

const ModalEditQuantity = ({ count, error, onChange }) => {
  const handleCount = (e) => {
    onChange((prev) => {
      return {
        ...prev,
        rating: { count: e.target.value },
      }
    })
  }

  return (
    <TextField
      error={error}
      helperText={error ? 'Please enter quantity.' : ''}
      fullWidth
      sx={{ marginTop: '20px', padding: '10px' }}
      autoFocus={true}
      onChange={handleCount}
      value={count}
      type="number"
      variant="filled"
      shrink="true"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <ProductionQuantityLimits />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default ModalEditQuantity
