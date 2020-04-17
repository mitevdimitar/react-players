import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css'

function Header( {user} ) {
    return (
        <header id="site-header">
            <nav className="navbar">
                <Navbar user={user}/>
            </nav>
        </header>
    );
}

export default Header;
