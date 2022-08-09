import { BrowserRouter } from 'react-router-dom'
import Routing from './assets/routes/Routing'
import { ProductsDataProvider } from './context/ProductsDataContext'

import { UserDataProvider } from './context/UserDataContext'
import { UserSettingsProvider } from './context/UserSettingsContext'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserDataProvider>
          <UserSettingsProvider>
            <ProductsDataProvider>
              <Routing />
            </ProductsDataProvider>
          </UserSettingsProvider>
        </UserDataProvider>
      </BrowserRouter>
    </div>
  )
}
export default App
