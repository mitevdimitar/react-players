import React from 'react';
import firebase from './Services/firebase';
import {storeProducts} from './Fanshop/productsInfo';

export const UserContext = React.createContext({
    user: null,
    isLogged: false
});

export const ProductConsumer = UserContext.Consumer;

class ContextWrapper extends React.Component {

    state={
        user: null,
        isLogged: false,
        products: storeProducts
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