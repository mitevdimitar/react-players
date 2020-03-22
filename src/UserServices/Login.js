import React from 'react';
import Header from '../Header/Header';
import './All.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
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
        console.log(this.state.email);
        console.log(this.state.password);
    }

    render() {
        return <div>
        <Header user={this.props.user}/>
        <section className="login">
        <form action="#/login" method="post">
        <fieldset>
            <legend>Login</legend>
                <p className="field">
                    <label for="email">Email</label>
                    <span className="input">
                    <input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                    <span className="actions"></span>
                    <i className="fas fa-envelope"></i>
                     </span>
                </p>
                <p className="field">
                    <label for="password">Password</label>
                    <span className="input">
                    <input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <span className="actions"></span>
                    <i className="fas fa-key"></i>
                    </span>
                </p>
            <input className="button submit" type="submit" value="Login" onClick={this.handleUserLogin}/>
        </fieldset>
        </form>
        </section>
    </div>
    }
       
}

export default Login