import React from 'react';
import Grid from '@material-ui/core/Grid';
import CartRow from "./CartRow";
import TotalRow from "./TotalRow";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ProductConsumer } from '../ContextWrapper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      height: ({inNavbar})=> (!inNavbar ? "75vh" : "100%")
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
    },
    emptyCartContainer: {
      height: "100%"
    }
  }));

function ShopCart({inNavbar, setAnchorEl}) {
    const classes = useStyles({inNavbar});

    return(
      <ProductConsumer>
        {(value) => {
          const {products, quantityChange, emptyCart} = value;
          const productCounts = products.map(product=>product.count);
          const productsInCart = productCounts.reduce((a, b) => a + b, 0);
          return (
            <Grid container justify="center" alignItems="center" className={classes.root}>
              {productsInCart > 0 ? <Grid container item justify="center" alignItems="center" direction="column" className={classes.cart}>
                {products.map(product => <CartRow key={product.id} product={product} quantityChange={quantityChange} />)}
                <TotalRow products={products}/>
                <Grid container item justify="flex-end" className={classes.buttonContainer}>
                  {inNavbar 
                    ?
                    <>
                      <Link onClick={()=>setAnchorEl(null)} to="/cart" className="details-button">Go to cart</Link>
                    </> 
                    :
                    <>
                      <Link to="/shop" className="details-button">Continue shopping</Link>
                      <Link onClick={()=>emptyCart()} to="/checkout" className="details-button">Checkout</Link>
                    </> 
                  }
                </Grid>
              </Grid>
              : 
              <Grid className={classes.emptyCartContainer} container item alignItems="center" justify="center" direction="column">
                <Typography>Cart it empty!</Typography>
                <Typography>Add products from fanshop!</Typography>
              </Grid>
              }
            </Grid>
          )
        }}
      </ProductConsumer>
    )
}

export default ShopCart;