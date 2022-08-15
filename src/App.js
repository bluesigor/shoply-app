import { BrowserRouter } from 'react-router-dom'

import { NotificationProvider } from './context/NotificationContext'
import { UserDataProvider } from './context/UserDataContext'
import { UserSettingsProvider } from './context/UserSettingsContext'
import Routing from './assets/routes/Routing'

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
