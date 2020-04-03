import React from 'react';
import firebase from '../../Services/firebase';
import {Link, Redirect} from 'react-router-dom';

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
        firebase.auth().signOut().then(() => {
            this.setState({ redirect: "/" })
          }).catch(function(error) {
            console.log(error)
          });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <section className="navbar-dashboard">
                    <div className="first-bar">
                        <Link to="/dashboard">Rankings</Link>
                        <a className="button" href="/myplayers">My Players</a>
                        <a className="button" href="/add">Add Player</a>
                    </div>
                    <div className="second-bar">
                        <ul>
                            <li>Welcome!</li>
                            <li><Link to="/logout" onClick={this.handleUserLogout}><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
    
}

export default NavbarLogged