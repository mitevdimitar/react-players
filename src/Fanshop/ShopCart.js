import React from 'react';
import Grid from '@material-ui/core/Grid';
import CartRow from "./CartRow";
import TotalRow from "./TotalRow";
import { makeStyles } from '@material-ui/core/styles';
import { ProductConsumer } from '../ContextWrapper';

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

    return(
      <ProductConsumer>
        {(value) => {
          const {products, quantityChange} = value;
          return (
            <Grid container justify="center" alignItems="center" className={classes.root}>
              <Grid container item justify="center" alignItems="center" direction="column" className={classes.cart}>
                {products.map(product=>  <CartRow key={product.id} product={product} quantityChange={quantityChange} />)}
                <TotalRow/>
              </Grid>
            </Grid>
          )
        }}
      </ProductConsumer>
    )
}

export default ShopCart;