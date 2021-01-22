import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import ShopCart from "../../Fanshop/ShopCart";

const useStyles = makeStyles((theme) => ({
    paper: {
      border: '3px solid #FAFAD2',
      borderRadius: "20px",
      height: "326px",
      width: "500px",
      [theme.breakpoints.down('sm')]: {
        width: '340px',
      },
      backgroundColor: theme.palette.background.paper,
    },
  }));

function NavbarDropdown({id, open, anchorEl}) {
    const classes = useStyles();

    return (
        <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
            <div className={classes.paper}>
                <ShopCart inNavbar={true}/>
            </div>
        </Popper>
    )
}

export default NavbarDropdown;

