import React from 'react';
import './PlayerInfoButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from "react-router-dom";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../ContextWrapper';
import { withRouter } from "react-router";

class PlayerInfoButtons extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            likes: this.props.player.likes,
            redirect: null
        };
    }
    static contextType = UserContext;


   

handleDetailsButton = () => {
    if (this.context.user) {
        this.props.history.push(`/player-details/${this.props.player.getId}`)
    } else {
        console.log("not logged in")
    }
}

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
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
                    <a className="details-button" onClick={this.handleDetailsButton}>
                        Details
                    </a>
                    <FontAwesomeIcon icon={faHeart} /> <span>{this.state.likes}</span>
                </div>
            )
        }
    }
}

export default withRouter(PlayerInfoButtons);