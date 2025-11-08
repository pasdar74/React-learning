
import { createRoot } from 'react-dom/client'
import App from "./App"
import Custom from './Custom'
import { Fragment } from 'react'



createRoot(document.getElementById('root')).render(
  <Fragment>
    <App/>
    <Custom/>
  </Fragment>

)
