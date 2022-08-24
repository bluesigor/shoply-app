import React from 'react'
import { NotificationProvider } from '../../context/NotificationContext'
import { ShoppingCartProvider } from '../../context/ShoppingCartContext'
import { UserDataProvider } from '../../context/UserDataContext'
import { UserSettingsProvider } from '../../context/UserSettingsContext'

const GeneralProvider = ({ children }) => {
  return (
    <NotificationProvider>
      <UserDataProvider>
        <UserSettingsProvider>
          <ShoppingCartProvider>{children}</ShoppingCartProvider>
        </UserSettingsProvider>
      </UserDataProvider>
    </NotificationProvider>
  )
}

export default GeneralProvider
