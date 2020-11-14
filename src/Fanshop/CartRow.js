import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    row: {
      height: "50px",
      width: "60%",
      background: "lightgoldenrodyellow",
      marginBottom: "1px",
    },
    title: {
        paddingLeft: "60px"
    },
    number: {
        width: "35px"
    },
    underline: {
    "&&&:before": {
        borderBottom: "none"
    },
    "&&:after": {
        borderBottom: "none"
    }
    }
  }));

function CartRow({product}) {
    const classes = useStyles();
    return(
        <Grid container justify="center" alignItems="center" className={classes.row}>
            <Grid container justify="center" item xs={2}>
                <Avatar aria-label="logo" className={classes.avatar} src={require(`../img/${product.img}.png`)} />
            </Grid>
            <Grid item xs={6} className={classes.title}>{product.title}</Grid>
            <Grid item xs={2}>{product.price} USD</Grid>
            <Grid container justify="center" item xs={2}>
            <TextField
                InputProps={{ classes }}
                className={classes.number}
                id="standard-number"
                //label="Number"
                type="number"
                /* InputLabelProps={{
                shrink: true,
                }} */
            />
            </Grid>
        </Grid>
    )
}

export default CartRow;