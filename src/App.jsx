import { Fragment, useState } from "react"
import Index from "./Index"
import Sidebar from "./Layout/Sidebar/Sidebar"
import Header from "./Layout/Header"


const App = () => {

    return (      

            <div className="w-full flex flex-auto flex-col">
            <div className="flex flex-auto min-w-0">
                <div className="w-screen h-screen min-h-screen flex">


                    <Sidebar />


                    <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full ">


                        <Header />



                        <Index />

                    </div>

                </div>
            </div>

        </div>
    )

}
export default App