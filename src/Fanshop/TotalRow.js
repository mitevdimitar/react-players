import React from 'react';
import Grid from '@material-ui/core/Grid';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    row: {
      height: "50px",
      width: "90%",
      background: "lightgoldenrodyellow",
      marginBottom: "1px",
      marginTop: "2px"
    },
    total: {
        paddingLeft: "30px",
        color: "#234465"
    }
  }));

function TotalRow({product}) {
    const classes = useStyles();

    return(
        <Grid container justify="center" alignItems="center" className={classes.row}>
            <Grid item xs={2}></Grid>
            <Grid className={classes.total} item xs={6}>Total</Grid>
            <Grid container alignItems="center" item xs={1} className={classes.price}>{15} <AttachMoneyIcon style={{fontSize:"15px"}} /></Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    )
}

export default TotalRow;