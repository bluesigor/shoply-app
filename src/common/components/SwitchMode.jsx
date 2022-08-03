import React from 'react'
import { CssBaseline, FormControlLabel, Switch } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import { useMode } from '../../utils/hooks/useMode'
const SwitchMode = () => {
  const { color, handleColor } = useMode()
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
        label={color ? <LightModeIcon /> : <ModeNightIcon />}
      />
    </>
  )
}

export default SwitchMode
