import {Link} from 'react-router-dom';
import './User.css';

const User = ({id, name, contact, username, pass, deletecallback})=>{
    return(
        <div className='user' style={{color:'red'}}>
            <h3>Employee Name: {name}</h3>
            <p>ID: {id}</p>
            <p>Contact: {contact}</p>
            <p>User Name: {username}</p>
            <p>Password: {pass}</p>
            <button onClick={()=>deletecallback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> Upadte </Link>
        </div>
    );
}

export default User;