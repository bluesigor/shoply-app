import React, { createContext, useReducer, useContext } from 'react'

import {
  userDataReducer,
  userDataReducerInitialState,
} from '../store/userDataReducer/userDataReducer'

export const UserDataContext = createContext()

export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    userDataReducer,
    userDataReducerInitialState,
  )
  const userDataValue = {
    ...state,
    setIsLoggedIn: (value) =>
      dispatch({ type: 'setIsLoggedIn', payload: value }),
    setUserData: (user) => dispatch({ type: 'setUserData', payload: user }),
  }
  return (
    <UserDataContext.Provider value={userDataValue}>
      {children}
    </UserDataContext.Provider>
  )
}
export const useUserDataContext = () => {
  return useContext(UserDataContext)
}
