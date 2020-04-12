import React from 'react';
import handleData from '../../Services/handleData';
import listPlayers from '../../Services/listPlayers';
import './MyPlayers.css'

class MyPlayers extends React.Component {

    state = {
        myPlayers: [],
        creator: "5bb0874caccb650325e0227b"
    }

componentDidMount() {
    handleData.retreivePlayers()
    .then(data => {
        let playersArr = Object.values(data);
        this.setState({ myPlayers: playersArr });
    });
    /* handleData.retreivePlayers('0')
    .then(data => {
        console.log(data)
    }) */
}
    render() {
        return (
                <section class="my-players">
                    <h1>My Players</h1>
                    <ul class="my-players-list">
                        {listPlayers.listMy(this.state.myPlayers, this.state.creator)}
                    </ul>
                </section>
        )
    }
}

export default MyPlayers;