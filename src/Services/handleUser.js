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
    loginWithGoogle: () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                //let credential = result.credential;
                // This gives you a Google Access Token. You can use it to access the Google API.
                //var token = credential.accessToken;
                // The signed-in user info.
                let username = result.user.displayName;
                return username;
            }).catch((error) => {
                // Handle Errors here.
                var errorMessage = error.message;
                console.log(errorMessage)
                // The email of the user's account used.
                //var email = error.email;
            });
    },
    logout: () => {
        return firebase
        .auth()
        .signOut()
    }
}

export default handleUser;