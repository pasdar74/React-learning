
import { Routes , Route } from "react-router"

import NotFound from "../src/Pages/NotFound"
import UserList from "../src/Pages/Users/UserList"


const Index = () => {
    return (
        <main className="h-full">
            <div className="container h-full p-8 mx-auto">
                <div className="flex flex-col gap-4">

                    
                        
                        <Routes>              
                            <Route path="user" element={<UserList/>} />      
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    

                </div>

            </div>

        </main>
    )
}
export default Index