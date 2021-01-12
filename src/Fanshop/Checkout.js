import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: "80vh",
      width: "100%",
      background: "lightgoldenrodyellow",
    },
  }));

function Checkout() {
    const classes = useStyles();

    return(
        <Grid container justify="center" alignItems="center" className={classes.root}>
            Congratulations! Your virtual purchase was successful! Thank you for trying My Favorite PL Player! 
        </Grid>
    )
}

export default Checkout;