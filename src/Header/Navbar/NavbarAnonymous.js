import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import NavbarDropdown from "./NavbarDropdown";
import CartBadge from "../../Components/CartBadge";

function NavbarAnonymous() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

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
          {/* <Link className="button" to="/cart">
            Go to Cart
          </Link> */}
        </div>
        <div className="second-bar">
          <ul>
            <li>
              <IconButton aria-describedby={id} onClick={(event) => handleClick(event)}>
                <CartBadge />
              </IconButton>
              <NavbarDropdown id={id} open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
            </li>
            {/* <li>
              <a className="nav-button" href="/register">
                <i className="fas fa-user-plus"></i> Register
              </a>
            </li> */}
            <li>
              <a className="nav-button" href="/login">
                <i className="fas fa-sign-in-alt"></i> Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default NavbarAnonymous;
