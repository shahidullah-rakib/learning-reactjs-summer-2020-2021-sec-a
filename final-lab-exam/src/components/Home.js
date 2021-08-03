import {Link} from 'react-router-dom';

const Home = ()=>{
    return(
        <div>
            <Link to='/'>Home</Link> |
            <Link to='/create'>Add Employee</Link> |
            <Link to='/userlist'>Empolyee List</Link>
        </div>
    );
}

export default Home;