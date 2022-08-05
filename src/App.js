import { BrowserRouter } from 'react-router-dom'
import Routing from './assets/routes/Routing'

import { UserDataProvider } from './context/UserDataContext'
import { UserSettingsProvider } from './context/UserSettingsContext'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserDataProvider>
          <UserSettingsProvider>
            <Routing />
          </UserSettingsProvider>{' '}
        </UserDataProvider>{' '}
      </BrowserRouter>{' '}
    </div>
  )
}
export default App
