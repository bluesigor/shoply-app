import React, { useEffect } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { useUserSettingsContext } from '../../context/UserSettingsContext'
import Localizator from './Localizator'

const SwitchLocalization = () => {
  const { setUserLanguage, language } = useUserSettingsContext()

  useEffect(() => {
    setUserLanguage(language)
  }, [language])

  const handleLanguageChoice = (e) => {
    setUserLanguage(e.target.value)
  }

  return (
    <>
      <FormControl sx={{ m: 4, minWidth: 120 }} size="small">
        <InputLabel>
          <Localizator str="Language" lang={language} />
        </InputLabel>
        <Select
          defaultValue="en"
          value={language}
          onChange={handleLanguageChoice}
          label="Language"
        >
          <MenuItem value="uk">
            <Localizator str="Ukrainian" lang={language} />
          </MenuItem>
          <MenuItem value="en">
            <Localizator str="English" lang={language} />
          </MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default SwitchLocalization
