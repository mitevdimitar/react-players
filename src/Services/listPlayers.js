import React from 'react';
//import firebase from './firebase';
import PlayerInfo from '../Players/PlayerInfo/PlayerInfo';
import PlayerInfoButtons from '../Players/PlayerInfo/PlayerInfoButtons';
import getData from './getData';
import './listPlayers.css'

/* const firebaseData = firebase.database().ref();
firebaseData.on('value', (res) => {
    console.log(res.val())
}) */

const listPlayers = {
    listAll: (players, team) => {
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
                    <PlayerInfoButtons isMyPlayer={false}/>
                    </li>
            })
            :
            <div>
                Loading...
            </div>
        )
    },
    listMy: (players, id) => {
        return (
            players.length !== 0 ? 
            players
            .filter(player => {
                return player._acl.creator === id;
            })
            .map(myPlayer => {
                return <li key={myPlayer._id} className="myPlayer">
                    <PlayerInfo player={myPlayer}/>
                    <PlayerInfoButtons isMyPlayer={true}/>
                    </li>
            })
            :
            <div>
                Loading...
            </div>
        )
    } 
}

export default listPlayers;