import React, { useContext } from 'react';
import './PlayerInfoButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../ContextWrapper';
import { withRouter } from "react-router";

function PlayerInfoButtons({player, isMyPlayer, history}) {
    const auth = useContext(UserContext)

    const handleDetailsButton = () => {

        if (auth.user) {
            history.push(`/player-details/${player.getId}`)
        } else {
            console.log("not logged in")
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
                    </div>
                )
            }
    }

    return (
     renderPlayers()
    )
      
}

export default withRouter(PlayerInfoButtons);