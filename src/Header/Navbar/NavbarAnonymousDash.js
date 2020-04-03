import React from 'react';
import {Link} from 'react-router-dom';

function NavbarAnonymousDash() {
    return (
        <div>
            <section className="navbar-dashboard">
                <div className="first-bar">
                    <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className="second-bar">
                    <ul>
                        <li><a href="#/register"><i className="fas fa-user-plus"></i> Register</a></li>
                        <li><a href="#/login"><i className="fas fa-sign-in-alt"></i> Login</a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default NavbarAnonymousDash;
