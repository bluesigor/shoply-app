import React from 'react'
import { CssBaseline, FormControlLabel, Switch } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'

import { useUserSettingsContext } from '../../context/UserSettingsContext'

const SwitchMode = () => {
  const { setUserThemeMode, theme } = useUserSettingsContext()

  const handleMode = () =>
    theme === 'dark' ? setUserThemeMode('light') : setUserThemeMode('dark')

  return (
    <>
      <CssBaseline />
      <FormControlLabel
        sx={{
          display: 'flex',
          width: '200px',
          margin: '0px',
        }}
        onClick={handleMode}
        control={<Switch />}
        label={theme === 'light' ? <LightModeIcon /> : <ModeNightIcon />}
      />
    </>
  )
}

export default SwitchMode
