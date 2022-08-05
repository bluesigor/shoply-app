import React from 'react'
import { CssBaseline, FormControlLabel, Switch } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'

import { useMode } from '../../context/ModeContext'

const SwitchMode = () => {
  const { color, setColor } = useMode()
  const handleColor = () => {
    setColor((prev) => !prev)
  }
  return (
    <>
      <CssBaseline />
      <FormControlLabel
        sx={{
          display: 'flex',
          width: '200px',
          margin: '0px',
        }}
        onClick={handleColor}
        control={<Switch />}
        label={color ? <ModeNightIcon /> : <LightModeIcon />}
      />
    </>
  )
}

export default SwitchMode
