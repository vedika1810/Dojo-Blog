import { Link } from "react-router-dom";
//use "Link to" instead of "a href" tag to let react handle routing instead of server

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
            <Link to ="/">Home</Link>
            <Link to="/create">New</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;