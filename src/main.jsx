
import { createRoot } from 'react-dom/client'
import App from "./App"

import { Fragment, StrictMode } from 'react'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fragment>
      <App />
      
    </Fragment>
  </StrictMode>


)
