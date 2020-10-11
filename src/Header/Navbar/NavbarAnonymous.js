import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function NavbarAnonymous() {
  return (
    <section className="navbar-anonymous">
      <div className="nav-first-line">
        <div className="first-bar">
          <Link className="button" to="/dashboard">
            Rankings
          </Link>
          <Link className="button" to="/shop">
            Fanshop
          </Link>
        </div>
        <div className="second-bar">
          <ul>
            <li>
              <IconButton>
                <ShoppingCartIcon style={{ color: 'white' }} />
              </IconButton>
            </li>
            <li>
              <a className="nav-button" href="/register">
                <i className="fas fa-user-plus"></i> Register
              </a>
            </li>
            <li>
              <a className="nav-button" href="/login">
                <i className="fas fa-sign-in-alt"></i> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default NavbarAnonymous;
