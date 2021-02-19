import React from 'react';
import Navbar from "../navbar/navbar"
import Search from "../search/search"

const Header = () => {
    return ( 
        <div className="">
            <Navbar></Navbar>
            <Search></Search>
        </div>
     );
}
 
export default Header;