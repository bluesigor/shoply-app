import { BrowserRouter } from 'react-router-dom'

import Routing from './assets/routes/Routing'
import GeneralProvider from './utils/providers/GeneralProvider'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <GeneralProvider>
          <Routing />
        </GeneralProvider>
      </BrowserRouter>
    </div>
  )
}
export default App
