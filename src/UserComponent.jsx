import { useState } from "react"

const UserComponent=()=>{


    const[age,setage]=useState(20)

 const increaseage=()=>{
    setage(age+1)
 }
    return(
        <div>
            <h1>
                Welcome Morteza
            </h1>
            <p>
                your age is <strong>{age}</strong>
            </p>
            <button onClick={increaseage}>Increase Age</button>
        </div>
    )
}
export default UserComponent