import { BrowserRouter, Outlet } from 'react-router-dom'

import Routing from './assets/routes/Routing'
import GeneralProvider from './utils/providers/GeneralProvider'
import Layout from './assets/routes/Layout'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <GeneralProvider>
          <Layout>
            <Routing />
            <Outlet />
          </Layout>
        </GeneralProvider>
      </BrowserRouter>
    </div>
  )
}
export default App
