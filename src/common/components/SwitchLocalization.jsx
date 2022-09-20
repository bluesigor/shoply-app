import React, { useEffect } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import Localizator from './Localizator'

import { useUserSettingsContext } from '../../context/UserSettingsContext'

const SwitchLocalization = () => {
  const { setUserLanguage, language } = useUserSettingsContext()

  const handleLanguageChoice = (e) => {
    setUserLanguage(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('language', JSON.stringify(language))
  }, [language])

  return (
    <FormControl sx={{ m: 4, minWidth: 120 }} size="small">
      <InputLabel>
        <Localizator str="Language" />
      </InputLabel>
      <Select
        defaultValue="en"
        value={language}
        onChange={handleLanguageChoice}
        label="Language"
      >
        <MenuItem value="uk">
          <Localizator str="Ukrainian" />
        </MenuItem>
        <MenuItem value="en">
          <Localizator str="English" />
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default SwitchLocalization
