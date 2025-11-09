import { useEffect, useState } from "react"

const UserComponent = () => {
const [age, setage] = useState(20)



useEffect(()=>{
    console.log("Mounting")
    return ()=> console.log("Unmounting")
},[])



useEffect(()=>{
if(age === 25)
    console.log("Your age is 25")
},[age])






    

    const increaseage = () => {
        setage(age + 1)
    }
    return (
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