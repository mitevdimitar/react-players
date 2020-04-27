import React, {Component} from 'react';
import underConstruction from '../img/under-construction.jpg';
import './Fanshop.css'

class Fanshop extends Component {

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
            <div class="fanshop-container">
                    <img class="fanshop" src={underConstruction} alt="fanshop under construction"/>
            </div>
        )
    }
}

export default Fanshop