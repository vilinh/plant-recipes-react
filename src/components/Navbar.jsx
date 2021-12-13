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
                <Link to ="/"><li onClick={showMenu}>Home</li></Link>
                <Link to ="/recipes" onClick={showMenu}><li>Recipes</li></Link>
                <Link to ="/about" onClick={showMenu}><li>About</li></Link>
                <li>Contact</li>
            </ul>
            <div class="menu-btn" id={showLinks ? "showmenu" : ""}>
                <i onClick={showMenu}class="fa fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar;
