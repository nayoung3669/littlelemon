import navLogo from '../images/Logo.svg';


function Nav () {
    return (
        <div className='Nav'>
            <img src={navLogo} alt="nav logo"/>
            <ul>
                <a href='#home'><li> Home</li></a>
                <a href='#about'><li> About</li></a>
                <a href='#menu'><li> Menu</li></a>
                <a href='#reservation'><li> Reservation</li></a>
                <a href='#order'><li> Order Online</li></a>
                <a href='#login'><li> Login</li></a>
            </ul>
        </div>
    )
}

export default Nav;