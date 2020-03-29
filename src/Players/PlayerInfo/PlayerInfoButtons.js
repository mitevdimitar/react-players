import React from 'react';
import './PlayerInfoButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function PlayerInfoButtons() {
    return (
        <div className="player-info">
            <a href="#"><button className="button">Like <FontAwesomeIcon icon={faHeart} /> <span> 2</span></button></a>
            <a href="#"><button className="button">Details</button></a>
            
        </div>
    )
}

export default PlayerInfoButtons;