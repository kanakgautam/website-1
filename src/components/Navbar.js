import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.js'
import './Navbar.css'
import Dropdown from './Dropdown.js'

function Navbar() {

    const [click, setClick] = useState(false);

    const [dropdown, setDropdown] = useState(false);


    const handleClick = () => { setClick(!click) };

    const closeMobileMenu = () => { setClick(false) };

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(false);
        }
    }

    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-logo' >
                REWY
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Services <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Case Studies
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Blog
                    </Link>
                </li>
                <li className='nav-item-mobile'>
                    <form>
                        <input className='search-box' placeholder='Search for anything'></input>
                    </form>
                </li>
                <li className='nav-item-mobile'>
                    <Button />
                </li>
            </ul>
            <div className='top-left'>
                <div>
                    <form>
                        <input className='search-box' placeholder='Search for anything'></input>
                    </form>
                </div>
                <div className='get-started'>
                    <Button />
                </div>
            </div>
        </nav>
    )
}
export default Navbar;