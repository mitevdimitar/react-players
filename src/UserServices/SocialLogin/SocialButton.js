import React from 'react';
import Button from '@material-ui/core/Button';
import GoogleLogo from '../../img/google_logo.png';
import Icon from "@material-ui/core/Icon";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    height: "45px",
    border: "2px solid #234465",
    borderRadius: "0.4rem",
    background: "rgba(237, 244, 253, 0.966)",
    fontWeight: "bold",
    color: "#234465",
    textTransform: "uppercase",
    "&:hover": {
        background: "#234465",
        color: "rgba(237, 244, 253, 0.966)"
    }
  },
}));
 
function SocialButton() {
    const classes = useStyles();
    const svgIcon = (
        <Icon>
          <img alt="edit" src={GoogleLogo} />
        </Icon>
    );

    return (
        <Button startIcon={svgIcon} variant="contained" className={classes.button}>
            Continue with Google
        </Button>
    );
}
 
export default SocialButton;