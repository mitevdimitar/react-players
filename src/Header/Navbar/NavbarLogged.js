import React from 'react';

function NavbarLogged(props) {
    return (
        <div>
            <section className="navbar-dashboard">
                <div className="first-bar">
                    <a href="#/dashboard">Dashboard</a>
                    <a className="button" href="#/mypets">My Pets</a>
                    <a className="button" href="#/add">Add Pet</a>
                </div>
                <div className="second-bar">
                    <ul>
                        <li>Welcome, {props.user.name}!</li>
                        <li><a href="#/logout"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default NavbarLogged