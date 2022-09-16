import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
} from 'react'

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

  const memoizedSetIsLoggedIn = useCallback(
    (value) => dispatch({ type: 'setIsLoggedIn', payload: value }),
    [dispatch],
  )

  const memoizedSetUserData = useCallback(
    (user) => dispatch({ type: 'setUserData', payload: user }),
    [dispatch],
  )

  const userDataValue = {
    isLoggedIn: state.isLoggedIn,
    setIsLoggedIn: memoizedSetIsLoggedIn,

    isAdmin: state.isAdmin,
    userData: state.userData,
    setUserData: memoizedSetUserData,
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
