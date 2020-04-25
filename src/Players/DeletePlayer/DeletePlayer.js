import React, {Component} from 'react';
import handleData from '../../Services/handleData';
import firebase from '../../Services/firebase';
import './DeletePlayer.css'

class DeletePlayer extends Component {

    state = {
        isMyPlayer: false,
        name: "",
        likes: 0,
        description: "",
        imageURL: ""
    }

    deletePlayer = (e) => {
        e.preventDefault();
        handleData.deletePlayer(this.props.match.params.id)
            .catch((error) => {
                console.error('Error:', error);
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
            let dplayer = {...this.state}
            return (
                <div className="deletePlayer">
                    <h3>{dplayer.name}</h3>
                    <p>Player likes: <i className="fas fa-heart"></i>{dplayer.likes}</p>
                    <p className="img"><img src={dplayer.imageURL} alt="playerImage"/></p>
                    <p className="description">{dplayer.description}</p>
                    <a onClick={this.deletePlayer} href="#" className="details-button">Delete</a>
                </div>
            )
        }
    }

export default DeletePlayer;