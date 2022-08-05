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
  const prefersMode = useMediaQuery(
    `(prefers-color-scheme: ${state.theme ? 'light' : 'dark'})`,
  )
  const mode = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersMode ? 'dark' : 'light',
        },
      }),
    [prefersMode],
  )
  const useSettingsValue = {
    ...state,
    setUserThemeMode: (value) =>
      dispatch({ type: 'setUserThemeMode', payload: value }),
  }
  return (
    <ThemeProvider theme={mode}>
      <UserSettingsContext.Provider value={useSettingsValue}>
        {children}
      </UserSettingsContext.Provider>
    </ThemeProvider>
  )
}
export const useUserSettingsContext = () => {
  return useContext(UserSettingsContext)
}
