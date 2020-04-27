import React from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import handleUser from '../Services/handleUser';
import { Redirect } from "react-router-dom";
import './LoginRegister.css'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: null
        };
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    handleUserLogin = (e) => {
        e.preventDefault();
        //firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        handleUser.login(this.state.email, this.state.password)
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
    </div>
    }
       
}

export default Login