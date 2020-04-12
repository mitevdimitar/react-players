import React from 'react';
import './PlayerInfoButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function PlayerInfoButtons({id, isMyPlayer}) {
    if (isMyPlayer) {
        return (
            <div className="player-info">
                <a href={"/player-details/" + id}>
                    <button className="button">Edit</button>
                </a>
                <a href={"/delete/" + id}>
                    <button className="button">Delete</button>
                </a>
            </div>
        )
    } else {
        return (
            <div className="player-info">
                <a href="#">
                    <button className="button">Like/> 
                    </button>
                </a>
                <a href={"/player-details/" + id}>
                    <button className="button">Details</button>
                </a>
                <FontAwesomeIcon icon={faHeart} /> <span> 2</span>
            </div>
        )
    }
}

export default PlayerInfoButtons;