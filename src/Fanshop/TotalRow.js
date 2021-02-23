import React, { useEffect, useState } from 'react';
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

function TotalRow({products}) {
    const classes = useStyles();
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(()=>{
        let amount = 0;
        for (let product of products) {
            amount += product.count * product.price
        }
        setTotalAmount(amount)
    }, [products])

    return(
        <Grid container justify="center" alignItems="center" className={classes.row}>
            <Grid item xs={2}></Grid>
            <Grid className={classes.total} item xs={5}>Total</Grid>
            <Grid container justify="center" alignItems="center" item xs={2} className={classes.price}> <AttachMoneyIcon style={{fontSize:"15px"}} />{totalAmount}</Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    )
}

export default TotalRow;