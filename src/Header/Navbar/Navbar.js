import React from 'react';
import NavbarLogged from './NavbarLogged';
import NavbarAnonymous from './NavbarAnonymous';
import firebase from '../../Services/firebase';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            user: null
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((userInfo) => {
            if (userInfo) {
                this.setState({user: userInfo})
            } else {
                this.setState({user: null})
            }
          });
    }

    render() {
        if (this.state.user) {
            return (
                <NavbarLogged user={this.props}/>
            )
        } else {
            return (
                <NavbarAnonymous />
            )
        }
    }   

}


export default Navbar;
