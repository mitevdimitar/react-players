import React from 'react';
import Header from '../Header/Header';
import DashboardNav from './DashboardNav';
import './Dashboard.css'
import getData from '../Services/getData';
import listPlayers from '../Services/listPlayers';

let user = {
    name: "Mitko",
    age: 15,
    isLogged: true
};

class Dashboard extends React.Component {

    state = {
            allPlayers: []
        }
    
    render() {
        return (
        <div id="container">
            <Header user={user}/>
            <div className="dashboard">
                <h1>Dashboard</h1>
                <DashboardNav />
                <ul className="other-pets-list">
                    {listPlayers(this.state.allPlayers)}
                </ul>
            </div>
        </div>
    )}

    componentDidMount() {
        getData.players()
        .then(data => {
                this.setState({ allPlayers: data });
        })
    }
    
}

export default Dashboard;