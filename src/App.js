import { BrowserRouter } from 'react-router-dom'
import Routing from './assets/routes/Routing'
import { NotificationProvider } from './context/NotificationContext'

import { UserDataProvider } from './context/UserDataContext'
import { UserSettingsProvider } from './context/UserSettingsContext'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NotificationProvider>
          <UserDataProvider>
            <UserSettingsProvider>
              <Routing />
            </UserSettingsProvider>
          </UserDataProvider>
        </NotificationProvider>
      </BrowserRouter>
    </div>
  )
}
export default App
