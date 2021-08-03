import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return(
        <div>
            <Link to='/'>Home</Link> |
            <Link to='/create'>Create New Empolyee</Link> |
            <Link to='/userlist'>User List</Link>
        </div>
    );
}

export default Navbar;