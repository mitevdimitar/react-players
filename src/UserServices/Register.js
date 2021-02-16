import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import handleUser from '../Services/handleUser';
import TextField from '@material-ui/core/TextField';
import './LoginRegister.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleUserRegister = (e) => {
        e.preventDefault();
        handleUser.register(email, password)
            .then(setRedirect("/"))
            .catch(function(error) {
                let errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    useEffect(()=> {
        let footer = document.getElementById("site-footer");
        footer.style.position = "absolute";
        return () => { 
            let footer = document.getElementById("site-footer");
            footer.style.position = ""; 
        }
    })

    if (redirect) {
        return <Redirect to={redirect} />
    } else {
        return (
            <section className="register">
                <form className="register-form" action="#/register" method="post">
                    <fieldset>
                        <h4>REGISTER</h4>
                        <TextField 
                            required id="standard-required" 
                            label="Email" 
                            value={email} 
                            onChange={handleEmailChange} />
                        <TextField
                            required
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={password} 
                            onChange={handlePasswordChange}
                        />
                        <input className="button submit" type="submit" value="REGISTER" onClick={handleUserRegister}/>
                    </fieldset>
                </form>
            </section>
        )
    }
    
}

export default Register