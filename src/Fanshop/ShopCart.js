import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: "75vh",
    },
  }));

function ShopCart() {
    const classes = useStyles();
    return(
        <Grid container justify="center" alignItems="center" className={classes.root}>
            Your cart is empty
        </Grid>
    )
}

export default ShopCart;