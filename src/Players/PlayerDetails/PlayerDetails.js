import React, {Component} from 'react';
import handleData from '../../Services/handleData';
import firebase from '../../Services/firebase';
import Notification from '../../Notification/Notification';
import Button from '../../Components/Button';
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

    increaseLikes = () => {
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

    updatePlayerInfo = () => {
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
                        isMyPlayer: data && data.creator ? userInfo.uid === data.creator : false,
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

        const player = this.state;
        const { liked } = this.state;

    if (player.isMyPlayer) {
        return (
            <div className="detailsMyPlayer">
                <h3>{player.name}</h3>
                <p><span className="player-likes">Player likes: {player.likes}</span></p>
                <p className="img"><img src={player.imageURL} alt="playerImage"/></p>
                <textarea type="text" value={player.description} onChange={this.getDescription} name="description"></textarea>
                <Button handle={this.updatePlayerInfo}>Save</Button>
                <Notification message="Succesfully updated player info" />
            </div>
        )
    } else {
        return (
            <section className="detailsOtherPlayer">
                <h3>{player.name}</h3>
                <p><span className="player-likes">Player likes: {this.state.likes} </span>
                    {liked 
                        ? 
                    <Button>Liked</Button> 
                        : 
                    <Button handle = {this.increaseLikes}>
                        Like <i className="fas fa-heart"></i>
                    </Button>}
                </p>
                <p className="img"><img src={player.imageURL} alt="playerImage" /></p>
                <p className="description">{player.description}</p>
            </section>
        )
    }
    
    }
    
}

export default PlayerDetails;