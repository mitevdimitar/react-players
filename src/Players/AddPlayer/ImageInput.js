import React from 'react';

function ImageInput(props) {
    return (
        <p className="field">
            <label htmlFor="image">Image</label>
            <span className="input">
                <input onChange={props.handleImageChange} value={props.imageURL} type="text" name="imageURL" id="image" placeholder="https://..." />
                <span className="actions"></span>
            </span>
        </p>
    )
}

export default ImageInput;