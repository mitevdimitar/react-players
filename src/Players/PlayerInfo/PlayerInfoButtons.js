import React from 'react';
import './PlayerInfoButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function PlayerInfoButtons({isMyPlayer}) {
    if (isMyPlayer) {
        return (
            <div className="player-info">
                <a href="/player-details"><button className="button">Edit</button></a>   
            </div>
        )
    } else {
        return (
            <div className="player-info">
                <a href="#"><button className="button">Like <FontAwesomeIcon icon={faHeart} /> <span> 2</span></button></a>
                <a href="/player-details"><button className="button">Details</button></a>   
            </div>
        )
    }
}

export default PlayerInfoButtons;