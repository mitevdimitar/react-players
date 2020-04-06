import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css'

function Home() {
    
    return (
        <div id="site-content">
            <Header />
            <section className="basic">
                <h1> Welcome to My Favorite PL Player</h1>
            </section>
            <Footer />
        </div>
    );
}

export default Home;
       