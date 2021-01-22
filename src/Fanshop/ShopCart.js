import React from 'react';
import Grid from '@material-ui/core/Grid';
import CartRow from "./CartRow";
import TotalRow from "./TotalRow";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ProductConsumer } from '../ContextWrapper';

const useStyles = makeStyles((theme) => ({
    root: {
      height: ({inNavbar})=> (!inNavbar && "75vh")
    },
    cart: {
      width: ({inNavbar})=> (inNavbar ? "100%" : "70%"),
      minHeight: "320px",
      background: "#234465",
      position: "relative",
      borderRadius: "20px"
    },
    buttonContainer: {
      position: "absolute",
      bottom: 0,
      right: "50px"
    }
  }));

function ShopCart({inNavbar}) {
    const classes = useStyles({inNavbar});

    return(
      <ProductConsumer>
        {(value) => {
          const {products, quantityChange, emptyCart} = value;
          return (
            <Grid container justify="center" alignItems="center" className={classes.root}>
              <Grid container item justify="center" alignItems="center" direction="column" className={classes.cart}>
                {products.map(product=>  <CartRow key={product.id} product={product} quantityChange={quantityChange} />)}
                <TotalRow products={products}/>
                <Grid container item justify="flex-end" className={classes.buttonContainer}>
                  {inNavbar 
                    ?
                    <>
                      <Link to="/cart" className="details-button">Go to cart</Link>
                    </> 
                    :
                    <>
                      <Link to="/shop" className="details-button">Continue shopping</Link>
                      <Link onClick={()=>emptyCart()} to="/checkout" className="details-button">Checkout</Link>
                    </> 
                  }
                </Grid>
              </Grid>
            </Grid>
          )
        }}
      </ProductConsumer>
    )
}

export default ShopCart;