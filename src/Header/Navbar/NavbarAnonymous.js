import React from 'react';

function NavbarAnonymous() {
    return (
            <section className="navbar-anonymous">
                <ul>
                    <li><a href="/register"><i className="fas fa-user-plus"></i> Register</a></li>
                    <li><a href="/login"><i className="fas fa-sign-in-alt"></i> Login</a></li>
                </ul>
            </section>
    )
}

export default NavbarAnonymous;