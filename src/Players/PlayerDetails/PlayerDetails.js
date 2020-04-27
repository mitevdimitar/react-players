import React, {Component} from 'react';
import handleData from '../../Services/handleData';
import firebase from '../../Services/firebase';
import './PlayerDetails.css'

class PlayerDetails extends Component {

    state = {
            isMyPlayer: false,
            name: "",
            likes: 0,
            description: "",
            imageURL: "",
            liked: false
    }

    increaseLikes = (e) => {
        e.preventDefault();
        handleData.retreivePlayers(this.props.match.params.id)
            .then(player => {
                player.likes = player.likes + 1;
                this.setState({
                        likes: player.likes,
                        liked: true
                });
                handleData.putPlayer(this.props.match.params.id, player)
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            });
    }

    getDescription = (e) => {
        this.setState({description: e.target.value});
    }

    updatePlayerInfo = (e) => {
        e.preventDefault();
        handleData.retreivePlayers(this.props.match.params.id)
            .then(player => {
                player.description = this.state.description;
                handleData.putPlayer(this.props.match.params.id, player)
                    .then(() => {
                        let successDiv = document.getElementById('success');
                        successDiv.style.display = "block";
                        setTimeout(() => { 
                            successDiv.style.display = "none";
                         }, 2000);
                    }
                    )
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            });
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((userInfo) => {
            if (userInfo) {
                handleData.retreivePlayers(this.props.match.params.id)
                .then(data => {
                    this.setState({
                        isMyPlayer: userInfo.uid === data.creator,
                        name: data.name,
                        likes: data.likes,
                        description: data.description,
                        imageURL: data.imageURL
                    });
                });
            }
        });
    }

    render() {
        let button;
        if (this.state.liked) {
            button = <a className="details-button">Liked</a>
        } else {
            button = <a href="#" onClick = {this.increaseLikes} className="details-button">Like 
            <i className="fas fa-heart"></i>
            </a>
        }

        let player = this.state;

    if (player.isMyPlayer) {
        return (
            <div className="detailsMyPlayer">
                <h3>{player.name}</h3>
                <p><span className="player-likes">Player likes: {player.likes}</span></p>
                <p className="img"><img src={player.imageURL} alt="playerImage"/></p>
                <textarea type="text" value={player.description} onChange={this.getDescription} name="description"></textarea>
                <a href="#" className="details-button" onClick={this.updatePlayerInfo}>Save</a>
                <div id="success">Succesfully updated player info</div>
            </div>
        )
    } else {
        return (
            <section className="detailsOtherPlayer">
                <h3>{player.name}</h3>
                <p><span className="player-likes">Player likes: {this.state.likes} </span>
                        {button}
                </p>
                <p className="img"><img src={player.imageURL} alt="playerImage" /></p>
                <p className="description">{player.description}</p>
            </section>
        )
    }
    
    }
    
}

export default PlayerDetails;