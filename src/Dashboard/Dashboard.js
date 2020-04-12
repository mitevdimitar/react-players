import React from 'react';
import DashboardNav from './DashboardNav';
import './Dashboard.css'
import handleData from '../Services/handleData';
import listPlayers from '../Services/listPlayers';

class Dashboard extends React.Component {

    state = {
            allPlayers: []
        }

    componentDidMount() {
        handleData.retreivePlayers()
            .then(data => {
                let playersArr = Object.values(data);
                this.setState({ allPlayers: playersArr });
        });
        //handleData.retreivePlayers()
    }

    render() {
        //let team = this.props.match.params.team
        //team ? console.log(team) : console.log('Main dashboard');
        return (
        <div id="container">
            <div className="dashboard">
                <h1>Rankings</h1>
                <DashboardNav />
                <ul className="other-players-list">
                    {listPlayers.listAll(this.state.allPlayers, this.props.match.params.team)}
                </ul>
            </div>
        </div>
    )}
    
}

export default Dashboard;