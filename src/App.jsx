import { Fragment, useState } from "react"

import Users from "./Users"


const userlist = [
        { name: "Ali", age: "40", country: "Uae" },
        { name: "omid", age: "26", country: "tailand" },
        { name: "elnaz", age: "40", country: "tehran" },
    ]


const App = () => {

    

    const [users,setUsers] = useState(userlist)

    const handledelete=(name)=>{
        const newusers= users.filter((user)=>user.name !== name)
        setUsers(newusers)
    }


    const changesearch=(char)=>{
        
        const newusers= userlist.filter((user)=>user.name.toLowerCase().includes(char.toLowerCase()) )
        setUsers(newusers)
    }



    return (
        <Fragment>

            <input onChange={(e)=>changesearch(e.target.value)} type="text" />

            {
                users.map((user) => (
                    <Users key={user.name} name={user.name} age={user.age} country={user.country} handledelete={()=>handledelete(user.name)}/>
                ))
            }
            
        </Fragment>

    )

}
export default App