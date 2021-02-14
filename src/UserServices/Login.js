import React, { useState } from 'react';
import handleUser from '../Services/handleUser';
import { Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import SocialButton from "./SocialLogin/SocialButton";
import './LoginRegister.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleUserLogin = (e) => {
        e.preventDefault();
        handleUser.login(email, password)
            .then(setRedirect("/"))
            .catch(function(error) {
                let errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    /* handleGoogleLogin = async () => {
        const user = await handleUser.loginWithGoogle();
        console.log(user)
        this.setState({ redirect: "/" })
    } */

    if (redirect) {
        return <Redirect to={redirect} />
        }
    return (
        <>
            <section className="login">
                <form className="login-form" action="#/login" method="post">
                    <h4>LOGIN</h4>
                    <TextField 
                        required 
                        id="standard-required" 
                        label="Email" 
                        value={email} 
                        onChange={handleEmailChange} 
                    />
                    <TextField
                        required
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password} 
                        onChange={handlePasswordChange}
                    />
                    <input className="button submit" type="submit" value="LOGIN" onClick={handleUserLogin}/>
                    <div>or</div>
                     <div>
                        <SocialButton />
                    </div>
                    {/* <div>
                        <button onClick={this.handleGoogleLogin}>
                            Log in with Google
                        </button>
                    </div> */}
                </form>               
            </section>
        </>
    )
       
}

export default Login