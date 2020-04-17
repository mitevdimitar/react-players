import React from 'react';
import NavbarLogged from './NavbarLogged';
import NavbarAnonymous from './NavbarAnonymous';

class Navbar extends React.Component {

    render() {
        if (this.props.user) {
            return (
                <NavbarLogged user={this.props.user}/>
            )
        } else {
            return (
                <NavbarAnonymous />
            )
        }
    }   

}


export default Navbar;
