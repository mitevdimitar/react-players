import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import CartRow from "./CartRow";
import { makeStyles } from '@material-ui/core/styles';
import {UserContext} from "../ContextWrapper";

const useStyles = makeStyles((theme) => ({
    root: {
      height: "75vh",
    },
  }));

function ShopCart() {
    const classes = useStyles();
    const {products} = useContext(UserContext);

    return(
        <Grid container justify="center" alignItems="center" direction="column" className={classes.root}>
            {products.map(product=>  <CartRow product={product} />)}
        </Grid>
    )
}

export default ShopCart;