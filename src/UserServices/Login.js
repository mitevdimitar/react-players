import React, { useState } from 'react';
import handleUser from '../Services/handleUser';
import { Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import SocialButton from "./SocialLogin/SocialButton";
import Grid from '@material-ui/core/Grid';
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

    const handleGoogleLogin = async () => {
        const user = await handleUser.loginWithGoogle();
        console.log(user)
        setRedirect("/");
    }

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
                    <Grid 
                        container 
                        alignItems="center" 
                        justify="center" 
                        style={{marginTop: "10px", marginBottom: "10px"}}
                    >
                        or
                    </Grid>
                    <SocialButton handleGoogleLogin={handleGoogleLogin}/>
                    <Grid className="register-prompt" container justify="center" style={{marginTop: "20px", fontSize: "0.7rem" }}>
                        Don't have account? <a href={"/register"}>&nbsp; Register here</a>
                    </Grid>
                </form>               
            </section>
        </>
    )
       
}

export default Login