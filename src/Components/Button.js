import React from "react";
import Button from '@material-ui/core/Button';

function ButtonComponent(props) {
    return (
        <Button onClick={() => props.handle()}>
            {props.children}
        </Button>
    )
}

export default ButtonComponent;