import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css'

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
                <h1> Welcome to My Favorite PL Player</h1>
            </section>
            <Footer />
        </div>
    );
}

export default Home;
       