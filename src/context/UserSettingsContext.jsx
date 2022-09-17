import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react'
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

  const memoizedLanguage = useMemo(() => state.language, [state.language])

  const memoizedSetUserLanguage = useCallback(
    (lang) => dispatch({ type: 'setUserLanguage', payload: lang }),
    [dispatch],
  )

  const userSettingsValue = {
    theme: state.theme,
    setUserThemeMode: (value) =>
      dispatch({ type: 'setUserThemeMode', payload: value }),
    language: memoizedLanguage,
    setUserLanguage: memoizedSetUserLanguage,
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
