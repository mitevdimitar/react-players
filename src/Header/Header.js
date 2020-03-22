import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css'

function Header(props) {
    return (
        <header id="site-header">
            <nav className="navbar">
                <Navbar {...props}/>
            </nav>
        </header>
    );
}

export default Header;
