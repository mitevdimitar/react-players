import React from 'react';
import handleData from '../../Services/handleData';
import listPlayers from '../../Services/listPlayers';
import { UserContext } from '../../ContextWrapper';
import './MyPlayers.css'

class MyPlayers extends React.Component {

    static contextType = UserContext;

    state = {
        myPlayers: []
    }

componentDidMount() {
    handleData.retreivePlayers()
    .then(data => {
        let playersArr = Object.values(data);
        let filteredPlayers = playersArr
        .filter(player => {
            return player.creator === this.context.user.uid
        })
        this.setState({ myPlayers: filteredPlayers });
    });
}

componentDidUpdate() {
    if(this.state.myPlayers.length === 0) {
        let footer = document.getElementById("site-footer");
        footer.style.position = "absolute";
    }
}

componentWillUnmount() {
    let footer = document.getElementById("site-footer");
    footer.style.position = "";
}

    render() {
        return (
                <section className="my-players">
                    <h1>My Players</h1>
                    <ul className="my-players-list">
                        {listPlayers.listMy(this.state.myPlayers)}
                    </ul>
                </section>
        )
    }
}

export default MyPlayers;