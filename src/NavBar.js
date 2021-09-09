import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <div className="navbar-container">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Products</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;
