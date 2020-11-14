import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withRouter } from "react-router";
//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "../Components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize: "contain",
    cursor: "pointer"
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function ProductCard( {img, name, info, company, handleDetails, addToCart, id, history, productsInCart} ) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = (id) => {
    addToCart(id);
    setOpen(true);
};

useEffect(()=> {
  console.log(productsInCart)
});

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="logo" className={classes.avatar} src={require(`../img/premier-league-logo.png`)} />
        }
        action={
          <IconButton aria-label="shop" onClick={() => handleOpen(id)}>
            <ShoppingCartIcon />
          </IconButton>
        }
        title={name}
        subheader={company}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-product-added"
        aria-describedby="alert-procduct-added-to-cart"
    >
        <DialogTitle id="alert-product-added">{"Product added to cart!"}</DialogTitle>
        <DialogActions>
        <Button handle={() => handleClose()} color="primary">
            Continue shopping
        </Button>
        <Button handle={() => history.push('./cart')} color="primary" autoFocus>
            Go to cart
        </Button>
        </DialogActions>
    </Dialog>
      <CardMedia
        className={classes.media}
        image={require(`../img/${img}.png`)}
        title={name}
        onClick={()=>{
            handleDetails(id);
            history.push("/product-details");
        }}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {info}
        </Typography>
      </CardContent>
    </Card>
  );
}


export default withRouter(ProductCard);