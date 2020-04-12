const handleData = {
    retreivePlayers: (id) => {
        let url = id ? `https://players-c7ea6.firebaseio.com/${id}/.json` : 'https://players-c7ea6.firebaseio.com/.json';
        return fetch(url)
        .then(res => {
            return res.json();
        })
    },
    postPlayer: (token, player) => {
        return fetch(`https://players-c7ea6.firebaseio.com/.json?auth=${token}`, {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
            })
            .then((response) => response.json())
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