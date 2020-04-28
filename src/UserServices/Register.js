import React from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import { Redirect } from "react-router-dom";
import handleUser from '../Services/handleUser';
import './LoginRegister.css';

class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            redirect: null
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUserRegister = this.handleUserRegister.bind(this);
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleUserRegister(e) {
        e.preventDefault();
        handleUser.register(this.state.email, this.state.password)
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
        return (
            <div>
                <section className="register">
                    <form action="#/register" method="post">
                        <fieldset>
                            <legend>Register</legend>
                            <EmailInput email={this.state.email} handleEmailChange={this.handleEmailChange}/>
                            <PasswordInput password={this.state.password} handlePasswordChange={this.handlePasswordChange}/>
                            <input className="button submit" type="submit" value="Register" onClick={this.handleUserRegister}/>
                        </fieldset>
                    </form>
                </section>
            </div>
        )
    }
}

export default Register