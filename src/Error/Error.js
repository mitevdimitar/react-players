import React, {Component} from 'react';
import error from '../img/error-404.png';
import './Error.css'

class ErrorPage extends Component {

    componentDidMount() {
        let footer = document.getElementById("site-footer");
        footer.style.position = "absolute";
    }
    
    componentWillUnmount() {
        let footer = document.getElementById("site-footer");
        footer.style.position = "";
    }

    render() {
        return (
            <div class="error-container">
                <img class="error" src={error} alt="error"/>
            </div>
        )
    }
}

export default ErrorPage