import React from 'react';
import PlayerDetail from '../Pets/PlayerDetail';
import firebase from '../Services/firebase';

const firebaseData = firebase.database().ref();
firebaseData.on('value', (res) => {
    console.log(res.val())
})

const listPlayers = (players) => {
    return (
        players.length !== 0 ? 
        players.map(otherPlayer => {
            return <li className="otherPet">
                <PlayerDetail key={otherPlayer.id} player={otherPlayer}/>
                <div className="pet-info">
                <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                <a href="#"><button className="button">Details</button></a>
                <i className="fas fa-heart"></i> <span> 2</span>
                </div>
                </li>
        })
        :
        <div>
            Loading...
        </div>
    )
}

export default listPlayers;