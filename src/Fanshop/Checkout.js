import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: "50%",
      width: "50%",
      background: "lightgoldenrodyellow",
    },
  }));

function Checkout() {
    const classes = useStyles();

    return(
        <Grid container justify="center" alignItems="center" className={classes.root}>
            Checkout page
        </Grid>
    )
}

export default Checkout;