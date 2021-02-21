import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    cart: {
        color: "white"
    }
  }));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -2,
    top: 17,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    minWidth: "15px",
    width: "15px",
    height: "15px",
    fontSize: "10px"

  },
}))(Badge);

export default function CustomizedBadges({ count }) {
    const classes = useStyles();
  return (
      <StyledBadge badgeContent={count} color="secondary">
        <ShoppingCartIcon className={classes.cart} />
      </StyledBadge>
  );
}