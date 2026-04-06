import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './pages/landing/App'
import storeData from './redux/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <Provider store={storeData}>
<App/>
 </Provider>
  </StrictMode>,
)
