const getData = {
    players: () => {
        return fetch('https://players-c7ea6.firebaseio.com/.json')
        .then(res => {
            return res.json();
        })
    }
}

export default getData;