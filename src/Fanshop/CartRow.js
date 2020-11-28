import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    row: {
      height: "50px",
      width: "90%",
      background: "lightgoldenrodyellow",
      marginBottom: "1px",
    },
    title: {
        paddingLeft: "30px",
        color: "#234465"
    },
    number: {
        width: "35px",
        color: "#234465"
    },
    deleteIcon: {
        color: "#234465",
        cursor: "pointer"
    },
  }));

function CartRow({product}) {
    const classes = useStyles();
    const [productQuantity, setProductQuantity] = useState(product.count)
    
    const quantityChange = (e) => {
        setProductQuantity(e.target.value)
    }
    return(
        <Grid container justify="center" alignItems="center" className={classes.row}>
            <Grid container justify="center" item xs={2}>
                <Avatar aria-label="logo" className={classes.avatar} src={require(`../img/${product.img}.png`)} />
            </Grid>
            <Grid item xs={6} className={classes.title}>{product.title}</Grid>
            <Grid container alignItems="center" item xs={1} className={classes.price}>{product.price} <AttachMoneyIcon style={{fontSize:"15px"}} /></Grid>
            <Grid container justify="center" item xs={2}>
            <TextField
                InputProps={{disableUnderline: true}}
                className={classes.number}
                id="standard-number"
                value={productQuantity}
                onChange={quantityChange}
                type="number"
            />
            </Grid>
            <Grid container alignItems="center" item xs={1} className={classes.deleteIcon}>
                <HighlightOffIcon />
            </Grid>
        </Grid>
    )
}

export default CartRow;