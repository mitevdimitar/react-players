import React from 'react';
import firebase from './Services/firebase';

export const UserContext = React.createContext({
    user: null,
    isLogged: false
});

class ContextWrapper extends React.Component {

    state={
        user: null,
        isLogged: false
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((userInfo) => {
            if (userInfo) {
                this.setState({user: userInfo,
                isLogged:true})
            } else {
                this.setState({user: null,
                isLogged: false})
            }
          });
    }

    render() {
        return (
            <UserContext.Provider value={ this.state }>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default ContextWrapper;