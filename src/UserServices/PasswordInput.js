import React from 'react';

function PasswordField(props) {
    return (
        <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
            <input type="password" name="password" id="password" placeholder="Enter your password" value={props.password} onChange={props.handlePasswordChange}/>
            <span className="actions"></span>
            <i className="fas fa-key"></i>
            </span>
        </p>
    )
}

export default PasswordField;