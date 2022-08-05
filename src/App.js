import { BrowserRouter } from 'react-router-dom'
import Routing from './assets/routes/Routing'

import { ModeProvider } from './context/ModeContext'
import { UserDataProvider } from './context/UserDataContext'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserDataProvider>
          <ModeProvider>
            <Routing />
          </ModeProvider>
        </UserDataProvider>
      </BrowserRouter>
    </div>
  )
}
export default App
