import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css'

function Header() {
    return (
        <header id="site-header">
            <nav className="navbar">
                <Navbar />
            </nav>
        </header>
    );
}

export default Header;
