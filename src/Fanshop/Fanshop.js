import React, {Component} from 'react';
import underConstruction from '../img/under-construction.jpg';
import './Fanshop.css'

class Fanshop extends Component {

    render() {
        return (
            <div class="fanshop-container">
                    <img class="fanshop" src={underConstruction} alt="fanshop under construction"/>
            </div>
        )
    }
}

export default Fanshop;