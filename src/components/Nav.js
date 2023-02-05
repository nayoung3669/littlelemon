import navLogo from '../images/Logo.svg';
import hamburger from '../images/hamburger.svg';


function Nav () {
    return (
        <div className='navbar'>
            <a href="#home"><img className='navLogo' src={navLogo} alt="nav logo" /></a>
            <ul className='navbar_menu'>
                <a href='#home'><li> Home</li></a>
                <a href='#about'><li> About</li></a>
                <a href='#menu'><li> Menu</li></a>
                <a href='#reservation'><li> Reservation</li></a>
                <a href='#order'><li> Order Online</li></a>
                <a href='#login'><li> Login</li></a>
            </ul>
            <img src={hamburger} className="hamburger" alt="hamburger icon" />
        </div>
    )
}

export default Nav;