import firebase from './firebase';

const handleUser = {
    register: (email, password) => {
        return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function() {      
            return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
        })
        .catch(function(error) {
            let errorMessage = error.message;
            console.log(errorMessage)
        });        
    },
    login: (email, password) => {
        return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function() {  
            return firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
        })
        .catch(function(error) {
            let errorMessage = error.message;
            console.log(errorMessage)
        });    
    },
    logout: () => {
        return firebase
        .auth()
        .signOut()
    }
}

export default handleUser;