import React from 'react';
import './PlayerDetails.css'

const player = {
    isMyPlayer: true,
    name: "Mitko",
    likes: 3,
    description: "My Description",
    imageURL: "https://lh3.googleusercontent.com/proxy/7s72jjAKC1Ys1sYWT-ppu5zfPDQQawsiAikakS385uOgHK1Hgu_s7dnzKopipd_m1dMpfaqx4EvuSsDdgqcOkH9o9NopRWGlPqr1MyURbQta"
}

function PlayerDetails() {
    if (player.isMyPlayer) {
        return (
            <div className="detailsMyPlayer">
                <h3>{player.name}</h3>
                <p>Player likes: <i className="fas fa-heart"></i>{player.likes}</p>
                <p className="img"><img src={player.imageURL} alt="playerImage"/>></p>
                <form action="#" method="POST">
                    <textarea type="text" name="description">{player.description}</textarea>
                    <button className="button"> Save</button>
                </form>
            </div>
        )
    } else {
        return (
            <section className="detailsOtherPlayer">
                <h3>{player.name}</h3>
                <p>Player likes: {player.likes} <a href="#"><button className="button"><i className="fas fa-heart"></i>
                            Player</button></a>
                </p>
                <p className="img"><img src={player.imageURL} alt="playerImage" /></p>
                <p className="description">{player.description}</p>
            </section>
        )
    }
    
}

export default PlayerDetails;