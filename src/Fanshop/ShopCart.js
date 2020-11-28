import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import CartRow from "./CartRow";
import TotalRow from "./TotalRow";
import { makeStyles } from '@material-ui/core/styles';
import {UserContext} from "../ContextWrapper";

const useStyles = makeStyles((theme) => ({
    root: {
      height: "75vh",
    },
    cart: {
      width: "70%",
      minHeight: "300px",
      background: "#234465"
    }
  }));

function ShopCart() {
    const classes = useStyles();
    const {products} = useContext(UserContext);

    return(
        <Grid container justify="center" alignItems="center" className={classes.root}>
          <Grid container item justify="center" alignItems="center" direction="column" className={classes.cart}>
            {products.map(product=>  <CartRow key={product.id} product={product} />)}
            <TotalRow/>
          </Grid>
        </Grid>
    )
}

export default ShopCart;