import React, {/*  useEffect, */ useState } from 'react';
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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Tooltip from '@material-ui/core/Tooltip';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  snackBar: {
    top: "90px",
    bottom: "auto"
  }
}));

function ProductCard( {img, name, info, company, handleDetails, addToCart, id, history, products} ) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (id) => {
    addToCart(id);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  /* useEffect(()=> {
    console.log(products)
  }); */

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="logo" className={classes.avatar} src={require(`../img/premier-league-logo.png`)} />
        }
        action={
          <Tooltip title="Add to cart" placement="top">
            <IconButton aria-label="shop" onClick={() => handleOpen(id)}>
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>
        }
        title={name}
        subheader={company}
      />
      <Snackbar open={open} className={classes.snackBar} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Product added to cart!
        </Alert>
      </Snackbar>
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