import React from 'react';
import './All.css';
import Header from './Header/Header';
import PlayerDetail from './Pets/PlayerDetail';
import Players from './Pets/PlayerList';

function Home() {
    let user = {
        name: "Mitko",
        age: 15,
        isLogged: true
    }
    return (
        <div id="site-content">
            <Header user ={user}/>
            <section className="basic">
                <h1> Welcome to pet my pet!</h1>
                <PlayerDetail pet = {Players[0]}/>
            </section>
        </div>
    );
}

export default Home;

// { Header }
       