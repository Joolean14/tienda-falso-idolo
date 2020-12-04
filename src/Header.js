import './Header.css'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import logo from './falso-idolo-logo.png';
import { logRoles } from '@testing-library/react';

function Header() {
    return (
        <nav className='navbar'>
            <img className='logo' src={logo}></img>
            <div className='hamburger-menu'>
                <MenuIcon></MenuIcon>
            </div>
        </nav>
    );
}



export default Header;




