import React from 'react';

function NameInput(props) {
    return (
        <p className="field">
            <label htmlFor="name">Name</label>
            <span className="input">
                <input onChange={props.handleNameChange} value={props.name} type="text" name="name" id="name" placeholder="Name" />
                <span className="actions"></span>
            </span>
        </p>
    )
}

export default NameInput;