import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <div className="navbar-container">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/shop" className="navbar-item">Products</Link>
        </div>
    )
}
export default NavBar;
