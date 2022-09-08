import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import { createContext, useContext, useMemo, useReducer } from 'react'
import {
  userSettingsInitialState,
  userSettingsReducer,
} from '../store/useSettingsReducer/userSettingsReducer'

export const UserSettingsContext = createContext()

export const UserSettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    userSettingsReducer,
    userSettingsInitialState,
  )

  const prefersMode = useMediaQuery(`(prefers-color-scheme: ${state.theme})`)

  const mode = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersMode ? 'light' : 'dark',
        },
      }),
    [prefersMode],
  )
  const userSettingsValue = {
    theme: state.theme,
    setUserThemeMode: (value) =>
      dispatch({ type: 'setUserThemeMode', payload: value }),
    language: state.language,
    setUserLanguage: (lang) =>
      dispatch({ type: 'setUserLanguage', payload: lang }),
  }

  return (
    <UserSettingsContext.Provider value={userSettingsValue}>
      <ThemeProvider theme={mode}>{children}</ThemeProvider>
    </UserSettingsContext.Provider>
  )
}

export const useUserSettingsContext = () => {
  return useContext(UserSettingsContext)
}
