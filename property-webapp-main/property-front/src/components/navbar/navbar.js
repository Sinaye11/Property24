import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-white white ">
            

            <Link className="navbar-brand" to="/"><h1 className="font-weight-bold text-blue">property<span className="text-danger">24</span></h1></Link>

            <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-4 mt-md-0">
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/profile">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-danger" to="/auth">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-danger" to="/auth">Properties</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-danger" to="/auth">Developments</Link>
                </li>

                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;