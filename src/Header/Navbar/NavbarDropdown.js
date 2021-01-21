import React from 'react';
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

