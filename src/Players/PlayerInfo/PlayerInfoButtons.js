import React, { useContext, useState } from 'react';
import './PlayerInfoButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../ContextWrapper';
import { withRouter } from "react-router";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function PlayerInfoButtons({player, isMyPlayer, history}) {
    const auth = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleDetailsButton = () => {

        if (auth.user) {
            history.push(`/player-details/${player.getId}`)
        } else {
            setOpen(true);
        }
    }

    const renderPlayers = () => {
            if (isMyPlayer) {
                return (
                    <div /* ref={this.listRef}  */className="player-info">
                        <a className="details-button" href={"/player-details/" + player.getId}>
                            Edit
                        </a>
                        <a className="details-button" href={"/delete/" + player.getId}>
                            Delete
                        </a>
                    </div>
                )
            } else {
                return (
                    <div className="player-info">
                        <a className="details-button" onClick={handleDetailsButton}>
                            Details
                        </a>
                        <FontAwesomeIcon icon={faHeart} /> <span>{player.likes}</span>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-not-logged-in"
                            aria-describedby="alert-prompt-log-in"
                        >
                            <DialogTitle id="alert-not-logged-in">{"You are not logged in!"}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-prompt-log-in">
                                Log in, so you could view player details and vote for your favorite player or 
                                add it if you can't see him among the nominees
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={() => handleClose()} color="primary">
                                Leave
                            </Button>
                            <Button onClick={() => history.push('/login')} color="primary" autoFocus>
                                Login
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                )
            }
    }

    return (
     renderPlayers()
    )
      
}

export default withRouter(PlayerInfoButtons);