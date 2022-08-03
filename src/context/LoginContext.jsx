import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
  const [inputData, setInputData] = useState({
    email: '',
    pass: '',
    isAdmin: false,
  })
  const [error, setError] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const handleEmail = (e) => {
    setInputData({ ...inputData, email: e.target.value })
  }
  const handlePass = (e) => {
    setInputData({ ...inputData, pass: e.target.value })
  }
  const handleAdmin = () => {
    setInputData({ ...inputData, isAdmin: !inputData.isAdmin })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputData.email || !inputData.pass) {
      setError(true)
    }
    if (inputData.email && inputData.pass) {
      setIsLoggedIn(true)
      navigate('/user')
      if (inputData.isAdmin) {
        navigate('/admin')
      }
    }

    console.log(inputData)
  }
  const logout = () => {
    setIsLoggedIn(false)
    setInputData({
      email: '',
      pass: '',
      isAdmin: false,
    })
    navigate('/')
  }

  return (
    <LoginContext.Provider
      value={{
        logout,
        error,
        isLoggedIn,
        handleEmail,
        handleAdmin,
        inputData,
        handlePass,
        handleSubmit,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
