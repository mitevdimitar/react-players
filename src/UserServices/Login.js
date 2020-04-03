import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import firebase from '../Services/firebase';
import { Redirect } from "react-router-dom";
import './LoginRegister.css'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            redirect: null
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUserLogin = this.handleUserLogin.bind(this);
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleUserLogin(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.setState({ redirect: "/" }))
            .catch(function(error) {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
        return <div>
        <Header user={this.props.user}/>
        <section className="login">
        <form action="#/login" method="post">
        <fieldset>
            <legend>Login</legend>
                <EmailInput email={this.state.email} handleEmailChange={this.handleEmailChange}/>
                <PasswordInput password={this.state.password} handlePasswordChange={this.handlePasswordChange}/>
            <input className="button submit" type="submit" value="Login" onClick={this.handleUserLogin}/>
        </fieldset>
        </form>
        </section>
        <Footer />
    </div>
    }
       
}

export default Login