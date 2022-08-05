import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import { createContext, useContext, useMemo, useState } from 'react'

export const ModeContext = createContext()

export const ModeProvider = ({ children }) => {
  const [color, setColor] = useState(false)
  const prefersMode = useMediaQuery(
    `(prefers-color-scheme: ${color ? 'light' : 'dark'})`,
  )
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersMode ? 'dark' : 'light',
        },
      }),
    [prefersMode],
  )

  return (
    <ThemeProvider theme={theme}>
      <ModeContext.Provider value={{ color, setColor }}>
        {children}
      </ModeContext.Provider>
    </ThemeProvider>
  )
}
export const useMode = () => {
  return useContext(ModeContext)
}
