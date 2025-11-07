
import { createRoot } from 'react-dom/client'

var test = "hello world"

createRoot(document.getElementById('root')).render(
  <div className='' style={{backgroundColor:"blue"}}>
    {test}
    
  </div>
)
