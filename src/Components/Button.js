import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: "10px",
        padding: "0.6rem 0.7re",
        marginBottom: "0.7rem",
        borderRadius: "0.4rem",
        fontWeight: "bold",
        background: "#234465",
        color: "rgba(237, 244, 253, 0.966)",
        "&:hover": {
            background: "rgb(248, 215, 107)",
            color: "rgb(0, 0, 0)"
        }
    },
  }));

function ButtonComponent(props) {
    const classes = useStyles();
    return (
        <Button className={classes.root} variant="contained" onClick={() => props.handle()}>
            {props.children}
        </Button>
    )
}

export default ButtonComponent;