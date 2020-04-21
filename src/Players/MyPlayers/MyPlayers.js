import React from 'react';
import handleData from '../../Services/handleData';
import listPlayers from '../../Services/listPlayers';
import './MyPlayers.css'

class MyPlayers extends React.Component {

    state = {
        user: this.props.user.uid,
        myPlayers: [],
    }

componentDidMount() {
    handleData.retreivePlayers()
    .then(data => {
        let playersArr = Object.values(data);
        this.setState({ myPlayers: playersArr });
    });
}

componentDidUpdate() {
    console.log(this.state.myPlayers.length)
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
                        {listPlayers.listMy(this.state.myPlayers, this.state.user)}
                    </ul>
                </section>
        )
    }
}

export default MyPlayers;