import React from 'react';
import firebase from '../../Services/firebase'
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class NavbarLogged extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            redirect: null
        };
        this.handleUserLogout = this.handleUserLogout.bind(this);
    }

    handleUserLogout(e) {
        e.preventDefault();
        firebase
        .auth()
        .signOut()
        .then(() => {
            this.setState({ redirect: "/" })
          }).catch(function(error) {
            console.log(error)
          });
    }

    toggleMenu(e) {
        e.preventDefault();
        let element = document.querySelectorAll(".navbar .first-bar .button");
        let elementsArr = Array.apply(null, element);
        elementsArr
            .map(a => {
                a.style.display === "flex" ? a.style.display = "none" : a.style.display = "flex"
            })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
                <section className="navbar-dashboard">
                    <div className="nav-first-line">
                        <div className="first-bar">
                            <a href="#" onClick={this.toggleMenu} className="white"><FontAwesomeIcon icon={faBars} /></a>
                            <Link className="button" to="/dashboard">Rankings</Link>
                            <Link className="button" to="/myplayers">My Players</Link>
                            <Link className="button" to="/addplayer">Add Player</Link>
                            <Link className="button" to="/fanshop">Fanshop</Link>
                        </div>
                        <div className="second-bar">
                            <ul>
                                <li>Welcome!</li>
                                <li><Link className="nav-button" to="/logout" onClick={this.handleUserLogout}><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
        )
    }
    
}

export default NavbarLogged;