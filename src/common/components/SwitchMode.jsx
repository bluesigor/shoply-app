import React from 'react'
import { CssBaseline, IconButton } from '@mui/material'
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
      <IconButton
        aria-label="control"
        sx={{
          maxHeight: '100%',
        }}
        onClick={handleMode}
      >
        {theme === 'dark' ? <ModeNightIcon /> : <LightModeIcon />}
      </IconButton>
    </>
  )
}

export default SwitchMode
