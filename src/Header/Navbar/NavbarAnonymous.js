import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import ShopCart from "../../Fanshop/ShopCart";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '2px solid #FAFAD2',
    height: "324px",
    width: "500px",
    backgroundColor: theme.palette.background.paper,
  },
}));

function NavbarAnonymous() {
  const classes = useStyles();
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
          <Link className="button" to="/cart">
            Go to Cart
          </Link>
        </div>
        <div className="second-bar">
          <ul>
            <li>
              <IconButton aria-describedby={id} onClick={(event) => handleClick(event)}>
                <ShoppingCartIcon style={{ color: 'white' }} />
              </IconButton>
              <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
               <div className={classes.paper}>
                  <ShopCart inNavbar={true}/>
                </div>
              </Popper>
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
