import React, { useState } from "react";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav>
            <div className='logo'>
                <Link to ="/"><h4>plant recipes</h4></Link>
            </div>
            <ul className='nav-links' id={showLinks ? "hidden" : ""}>
                <Link to ="/"><li>Home</li></Link>
                <Link to ="/recipes"><li>Recipes</li></Link>
                <Link to ="/about"><li>About</li></Link>
                <li>Contact</li>
            </ul>
            <div class="menu-btn"  id={showLinks ? "showmenu" : ""}>
                <i onClick={() => setShowLinks(!showLinks)}class="fa fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar;
