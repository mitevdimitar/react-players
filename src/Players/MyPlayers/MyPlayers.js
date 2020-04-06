import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import getData from '../../Services/getData';
import listPlayers from '../../Services/listPlayers';
import './MyPlayers.css'

class MyPlayers extends React.Component {

    state = {
        myPlayers: [],
        creator: "5bb0874caccb650325e0227b"
    }

componentDidMount() {
    getData.players()
    .then(data => {
            this.setState({ myPlayers: data });
    });
}
    render() {
        return (
            <React.Fragment>
                <Header/>
                <section class="my-players">
                    <h1>My Players</h1>
                    <ul class="my-players-list">
                        {listPlayers.listMy(this.state.myPlayers, this.state.creator)}
                    </ul>
                </section>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default MyPlayers;