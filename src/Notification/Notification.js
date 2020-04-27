import React from 'react';
import './Notification.css';

const Notification = (props) => {
    return (
    <div id="success">{props.message}</div>
    )
}

export default Notification;