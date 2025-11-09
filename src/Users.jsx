const Users = ({ name, age, country,handledelete }) => {




    return (
        <ul>
            <li>
                <p><strong>name:</strong>{name}</p>
            </li>
            <li>
                <p><strong>age:</strong>{age}</p>
            </li>
            <li>
                <p><strong>country:</strong>{country}</p>
            </li>
            <li>
                <button onClick={handledelete}>Delete</button>
            </li>
            
        </ul>
    )

}
export default Users