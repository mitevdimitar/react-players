import React from 'react';
import NavbarLogged from './NavbarLogged';

function Navbar(props) {
    if (props.user.isLogged) {
        return(
            <NavbarLogged {...props}/>
        );
    } else {
        return(<div>Not logged in</div>);
    }
}

export default Navbar;
