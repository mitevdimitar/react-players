import React from 'react';
import './DeletePlayer.css'

const dplayer = {
    isMyPlayer: true,
    name: "Mitko",
    likes: 3,
    description: "My Description",
    imageURL: "https://lh3.googleusercontent.com/proxy/7s72jjAKC1Ys1sYWT-ppu5zfPDQQawsiAikakS385uOgHK1Hgu_s7dnzKopipd_m1dMpfaqx4EvuSsDdgqcOkH9o9NopRWGlPqr1MyURbQta"
}

function DeletePlayer() {
        return (
            <div className="deletePlayer">
                <h3>{dplayer.name}</h3>
                <p>Player likes: <i className="fas fa-heart"></i>{dplayer.likes}</p>
                <p className="img"><img src={dplayer.imageURL} alt="playerImage"/>></p>
                <form action="#" method="POST">
                    <p className="description">{dplayer.description}</p>
                    <button className="button">Delete</button>
                </form>
            </div>
        )
    }

export default DeletePlayer;