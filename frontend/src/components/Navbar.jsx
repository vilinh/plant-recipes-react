import React, { useState } from "react";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    function showMenu(){
        setShowLinks(!showLinks);
    }

    return (
        <nav>
            <div className='logo'>
                <Link to ="/"><h4>plant recipes</h4></Link>
            </div>
            <ul className='nav-links' id={showLinks ? "hidden" : ""}>
                <Link to ="/" onClick={showMenu}><li >Home</li></Link>
                <Link to ="/recipes" onClick={showMenu}><li>Recipes</li></Link>
                <Link to ="/about" onClick={showMenu}><li>About</li></Link>
                <Link to ="/contact" onClick={showMenu}><li>Contact</li></Link>
            </ul>
            <div className="menu-btn"id={showLinks ? "showmenu" : ""}>
                <i onClick={showMenu}className="fa fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar;
