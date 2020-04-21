import React from 'react';
import './PlayerInfoButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class PlayerInfoButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.player.likes
        };
    }



    render() {
        if (this.props.isMyPlayer) {
            return (
                <div ref={this.listRef} className="player-info">
                    <a className="details-button" href={"/player-details/" + this.props.player.getId}>
                        Edit
                    </a>
                    <a className="details-button" href={"/delete/" + this.props.player.getId}>
                        Delete
                    </a>
                </div>
            )
        } else {
            return (
                <div className="player-info">
                    <a className="details-button" href={"/player-details/" + this.props.player.getId}>
                        Details
                    </a>
                    <FontAwesomeIcon icon={faHeart} /> <span>{this.state.likes}</span>
                </div>
            )
        }
    }
}

export default PlayerInfoButtons;