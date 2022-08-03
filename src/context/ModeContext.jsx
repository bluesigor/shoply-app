import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import { createContext, useMemo, useState } from 'react'
export const ModeContext = createContext()

export const ModeProvider = ({ children }) => {
  const prefersMode = useMediaQuery('(prefers-color-scheme: light)')
  const [color, setColor] = useState(prefersMode)
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: color ? 'light' : 'dark',
        },
      }),
    [color],
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
