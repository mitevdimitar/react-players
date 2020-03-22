import React from 'react';
import PetDetail from '../Pets/PetDetail';
import firebase from '../Services/firebase';

const firebaseData = firebase.database().ref();
firebaseData.on('value', (res) => {
    console.log(res.val())
})

const listOtherPets = (pets) => {
    return (
        pets.length !== 0 ? 
        pets.map(otherPet => {
            return <li className="otherPet">
                <PetDetail key={otherPet.id} pet={otherPet}/>
                <div className="pet-info">
                <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                <a href="#"><button className="button">Details</button></a>
                <i className="fas fa-heart"></i> <span> 2</span>
                </div>
                </li>
        })
        :
        <div>
            Loading...
        </div>
    )
}

export default listOtherPets