import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Fireworks } from 'fireworks/lib/react'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      height: "80vh",
      width: "100%",
      background: "lightgoldenrodyellow",
    },
    text: {
      fontFamily: "'Bitter', serif !important",
      paddingLeft: 40,
      paddingRight: 40
    }
  }));

function Checkout() {
    const classes = useStyles();

    const fxProps = {
      count: 3,
      interval: 200,
      colors: ['#cc3333', '#4CAF50', '#81C784'],
      calc: (props, i) => ({
        ...props,
        x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
        y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
      })
    }

    return(
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <Fireworks {...fxProps} />
            <Typography align="center" className={classes.text} variant="h3">
              Congratulations! Your virtual purchase was successful! Thank you for trying My Favorite PL Player! 
            </Typography>
        </Grid>
    )
}

export default Checkout;