import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonGoBack = () => {
  const navigate = useNavigate()

  return (
    <Button color="inherit" variant="outlined" onClick={() => navigate(-1)}>
      Go back to Products page
    </Button>
  )
}

export default ButtonGoBack
