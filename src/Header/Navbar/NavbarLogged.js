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
                        <Link className="button" to="/dashboard">Rankings</Link>
                        <Link className="button"  to="/myplayers">My Players</Link>
                        <Link className="button" to="/addplayer">Add Player</Link>
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