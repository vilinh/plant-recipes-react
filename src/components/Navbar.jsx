import React from "react";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <Link to ="/"><h4>plant recipes</h4></Link>
            </div>
            <ul className='nav-links'>
                <Link to ="/"><li>Home</li></Link>
                <Link to ="/recipes"><li>Recipes</li></Link>
                <Link to ="/about"><li>About</li></Link>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;
