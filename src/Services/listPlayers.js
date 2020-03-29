import React from 'react';
import PlayerInfo from '../Players/PlayerInfo/PlayerInfo';
import PlayerInfoButtons from '../Players/PlayerInfo/PlayerInfoButtons';
import firebase from '../Services/firebase';
import getData from './getData';
import './listPlayers.css'

/* const firebaseData = firebase.database().ref();
firebaseData.on('value', (res) => {
    console.log(res.val())
})
 */
const listPlayers = (players, team) => {
    let teamName = getData.teamName(team);
    return (
        players.length !== 0 ? 
        players
        .filter(player => {
            if (team) {
                return player.team === teamName;
            } else {
                return player
            }
        })
        .map(otherPlayer => {
            return <li key={otherPlayer._id} className="otherPlayer">
                <PlayerInfo player={otherPlayer}/>
                <PlayerInfoButtons />
                </li>
        })
        :
        <div>
            Loading...
        </div>
    )
}

export default listPlayers;