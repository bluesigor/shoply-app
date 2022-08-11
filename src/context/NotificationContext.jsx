import { createContext, useContext, useReducer } from 'react'

import Notification from '../common/components/Notification'
import {
  notificationInitialState,
  notificationReducer,
} from '../store/notificationReducer/notificationReducer'

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    notificationReducer,
    notificationInitialState,
  )

  const notificationValue = {
    message: state.message,
    setNotificationOpen: (value) => {
      dispatch({
        type: 'setNotificationOpen',
        payload: value,
      })
    },

    open: state.open,
    setNotificationClose: () => {
      dispatch({ type: 'setNotificationClose' })
    },
  }

  return (
    <NotificationContext.Provider value={notificationValue}>
      <Notification />
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotificationContext = () => {
  return useContext(NotificationContext)
}
