import { BrowserRouter } from 'react-router-dom'
import Routing from './assets/routes/Routing'
import { LoginProvider } from './context/LoginContext'
import { ModeProvider } from './context/ModeContext'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <LoginProvider>
          <ModeProvider>
            <Routing />
          </ModeProvider>{' '}
        </LoginProvider>{' '}
      </BrowserRouter>{' '}
    </div>
  )
}
export default App
