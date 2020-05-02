import React from 'react';
import NavbarLogged from './NavbarLogged';
import NavbarAnonymous from './NavbarAnonymous';
import { UserContext } from '../../ContextWrapper';

class Navbar extends React.Component {

    static contextType = UserContext;

    render() {
        if (this.context.isLogged) {
            return (
                <NavbarLogged/>
            )
        } else {
            return (
                <NavbarAnonymous />
            )
        }
    }   

}


export default Navbar;
