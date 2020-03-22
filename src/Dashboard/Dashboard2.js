import React from 'react';
import Header from '../Header/Header';
import DashboardNav from './DashboardNav';
import './Dashboard.css'
import getData from '../Services/getData';
import listPets from '../Services/listPets';

let user = {
    name: "Mitko",
    age: 15,
    isLogged: true
};

class Dashboard extends React.Component {

    state = {
            allOtherPets: []
        }
    
    render() {
        return (
        <div id="container">
            <Header user={user}/>
            <div className="dashboard">
                <h1>Dashboard</h1>
                <DashboardNav />
                <ul className="other-pets-list">
                    {listPets(this.state.allOtherPets)}
                </ul>
            </div>
        </div>
    )}

    componentDidMount() {
        getData.pets()
        .then(data => {
                this.setState({ allOtherPets: data });
        })
    }
    
}

export default Dashboard;

