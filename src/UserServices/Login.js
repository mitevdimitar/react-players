import React from 'react';
import handleUser from '../Services/handleUser';
import { Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
//import SocialButton from "./SocialLogin/SocialButton";
import './LoginRegister.css';

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

    handleGoogleLogin = async () => {
        const user = await handleUser.loginWithGoogle();
        console.log(user)
        this.setState({ redirect: "/" })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
        return (
            <React.Fragment>
                <section className="login">
                    <form className="login-form" action="#/login" method="post">
                        <h4>LOGIN</h4>
                        <TextField 
                            required 
                            id="standard-required" 
                            label="Email" 
                            value={this.state.email} 
                            onChange={this.handleEmailChange} 
                        />
                        <TextField
                            required
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={this.state.password} 
                            onChange={this.handlePasswordChange}
                        />
                        <input className="button submit" type="submit" value="LOGIN" onClick={this.handleUserLogin}/>
                        <div>or</div>
                       {/*  <div>
                            <SocialButton
                                provider='google'
                                appId='AIzaSyAACkvIcq7rUP6626d14tu2UYEQGj7D_8Y'
                                onLoginSuccess={this.handleSocialLogin}
                                onLoginFailure={this.handleSocialLoginFailure}
                            >
                            Login with GOOGLE
                            </SocialButton>
                        </div> */}
                        <div>
                            <button onClick={this.handleGoogleLogin}>
                                Log in with Google
                            </button>
                        </div>
                    </form>               
                </section>
            </React.Fragment>
        )
    }
       
}

export default Login