import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return(
        <div>
            <Link to='/'>Home</Link> |
            <Link to='/addproduct'>Add New Product</Link> |
            <Link to='/productlist'>Product List</Link>
        </div>
    );
}

export default Navbar;