import React from 'react';

function DescriptionInput(props) {
    return (
        <p className="field">
        <label htmlFor="description">Description</label>
        <span className="input">
            <textarea onChange={props.handleDescriptionChange} value={props.description} rows="4" cols="45" type="text" name="description" id="description"
                placeholder="Description"></textarea>
            <span className="actions"></span>
        </span>
    </p>
    )
}

export default DescriptionInput;