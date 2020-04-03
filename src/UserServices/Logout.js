import React from 'react';
import firebase from '../../Services/firebase';

constructor(props) {
    super(props);
    this.state={
        redirect: null
    };
    this.handleUserLogout = this.handleUserLogout.bind(this);
}

handleUserLogout(e) {
    e.preventDefault();
    firebase.auth().signOut().then(() => {
        this.setState({ redirect: "/" })
      }).catch(function(error) {
        console.log(error)
      });
}

onClick={this.handleUserLogout}