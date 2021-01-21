import React, { useState } from 'react';
import firebase from '../../Services/firebase';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NavbarDropdown from "./NavbarDropdown";

function NavbarLogged() {
  const [redirect, setRedirect] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleUserLogout = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        setRedirect('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const toggleMenu = (e) => {
    e.preventDefault();
    let element = document.querySelectorAll('.navbar .first-bar .button');
    let elementsArr = Array.apply(null, element);
    elementsArr.map((a) => {
     return a.style.display === 'flex'
        ? (a.style.display = 'none')
        : (a.style.display = 'flex');
    });
  }

  return (
    redirect ? <Redirect to={redirect} /> : 
    <section className="navbar-dashboard">
        <div className="nav-first-line">
          <div className="first-bar">
            <div onClick={toggleMenu} className="white">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <Link className="button" to="/dashboard">
              Rankings
            </Link>
            <Link className="button" to="/myplayers">
              My Players
            </Link>
            <Link className="button" to="/addplayer">
              Add Player
            </Link>
            <Link className="button" to="/shop">
              Fanshop
            </Link>
          </div>
          <div className="second-bar">
            <ul>
              <li>Welcome!</li>
              <IconButton aria-describedby={id} onClick={(event) => handleClick(event)}>
                <ShoppingCartIcon  style={{ color: 'white' }}/>
              </IconButton>
              <NavbarDropdown id={id} open={open} anchorEl={anchorEl} />
              <li>
                <Link
                  className="nav-button"
                  to="/logout"
                  onClick={handleUserLogout}
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default NavbarLogged;
