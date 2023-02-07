import navLogo from '../images/Logo.svg';
import hamburger from '../images/hamburger.svg';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav () {
    return (
        <div className='navbar'>
            <Link to="/" ><img className='navLogo' src={navLogo} alt="nav logo" /></Link>
            <ul className='navbar_menu'>
                <Link to="/"><li> Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <li>Menu</li>
                <Link to="/booking"><li>Reservation</li></Link>
                <Link to="/onlineOrder"><li>Online Order</li></Link>
                <li>Login</li>
            </ul>
            <img src={hamburger} className="hamburger" alt="hamburger icon" />
        </div>
    )
}

export default Nav;