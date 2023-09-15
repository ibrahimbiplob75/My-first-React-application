import { useEffect, useState } from "react"
import User from "./User"


export default function Users(){
        const [users,setUsers]=useState([]);

         useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>setUsers(data))


         },[]);
    return(
        <div className="box">
            <h1>Users : {users.length}</h1>
            {
               users.map(user=> <User user={user}></User>) 
            }
        </div>
        )
}