import { Fragment, useState } from "react"
import LoginComponent from "./LoginComponent"
import UserComponent from "./UserComponent"


const App = () => {

    
    const [islogined,setislogined]=useState(false)
    
    return (

        <div>
                <h1>Hello</h1>
                <button onClick={()=>setislogined(!islogined)}>
                    {islogined ? "Logout":"Login"}
                </button>
                {islogined ? <UserComponent/>:<LoginComponent/>}
                
        </div>

        
    )

}
export default App