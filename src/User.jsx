import './style.css'
export default function User({user}){
 
   const {name,email}=user;
         
    return(
        <div className="box">
            <h3>Users Name : {name}</h3>
            <h3>User Email : {email}</h3>
        </div>
        )
}