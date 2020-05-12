import React from 'react';

function EmailField(props) {
    return (
        <p className="field">
            <label htmlFor="email">Email</label>
            <span className="input">
            <input type="email" name="email" id="email" placeholder="Enter your email" value={props.email} onChange={props.handleEmailChange}/>
            <span className="actions"></span>
            <i className="fas fa-envelope"></i>
            </span>
        </p>
    )
}

export default EmailField;