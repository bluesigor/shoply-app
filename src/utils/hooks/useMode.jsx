import { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'

export const useMode = () => {
  return useContext(ModeContext)
}
