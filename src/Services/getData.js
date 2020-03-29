const getData = {
    players: () => {
        return fetch('https://players-c7ea6.firebaseio.com/.json')
        .then(res => {
            return res.json();
        })
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

export default getData;