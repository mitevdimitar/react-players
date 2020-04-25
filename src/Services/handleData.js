import firebase from './firebase'

const handleData = {
    retreivePlayers: (id) => {
        let url = id ? `https://players-c7ea6.firebaseio.com/${id}/.json` : 'https://players-c7ea6.firebaseio.com/.json';
        return fetch(url)
        .then(res => {
            return res.json();
        })
    },
    postPlayer: (player) => {
        return firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            return fetch(`https://players-c7ea6.firebaseio.com/.json?auth=${idToken}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(player),
                })
            .then((response) => {
                return response.json()
            })
        })
        .catch(function(error) {
            console.log(error)
        });
    },
    putPlayer: (id, player) => {
        return firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            return fetch(`https://players-c7ea6.firebaseio.com/${id}.json?auth=${idToken}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
            })
            .then((response) => {
                return response.json()
            })
        })
        .catch(function(error) {
            console.log(error)
        });
    },
    deletePlayer: (id) => {
        return firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            return fetch(`https://players-c7ea6.firebaseio.com/${id}.json?auth=${idToken}`, {
            method: 'DELETE'
            })
            .then((response) => {
                return response.json()
            })
        })
        .catch(function(error) {
            console.log(error)
        });
    },
    teamName: (team) => {
        if (team === 'manutd') {
            return 'Man Utd';
        } else if (team === 'liverpool') {
            return 'Liverpool';
        } else if (team === 'chelsea') {
            return 'Chelsea';
        } else if (team === 'mancity') {
            return 'Man City';
        } else if (team === 'arsenal') {
            return 'Arsenal';
        } else if (team === 'other') {
            return 'Other';
        }
    }
}

export default handleData;