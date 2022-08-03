import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import { createContext, useMemo, useState } from 'react'
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

  const handleColor = () => setColor((prev) => !prev)
  return (
    <ThemeProvider theme={theme}>
      <ModeContext.Provider value={{ color, handleColor }}>
        {children}
      </ModeContext.Provider>{' '}
    </ThemeProvider>
  )
}
