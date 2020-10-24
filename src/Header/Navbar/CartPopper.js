import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '2px solid grey',
    minHeight: "200px",
    minWidth: "300px",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimplePopper({anchorEl}) {
  const classes = useStyles();

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  
  return (
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div  className={classes.paper}  >Your cart is empty.</div>
      </Popper>
  );
}
