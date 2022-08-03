import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

const useLogin = () => {
  return useContext(LoginContext)
}

export default useLogin
