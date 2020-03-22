import React from 'react';
import './PetDetail.css';

class PetDetail extends React.Component {
    
        state = {
            counter: 1
        }
        counterIncrease = () => {
            this.setState({counter: this.state.counter + 1});
        }

    render() {
        const { pet } = this.props;
        return  <div>
                    <h3>Name: {pet.name}</h3>
                    <p>Category: {pet.category}</p>
                    <p className="img"><img src={pet.imageURL}/></p>
                    <p className="description">{pet.description}</p>
                    <button onClick={this.counterIncrease}>Counter: {this.state.counter}</button>
                </div>
        
    }
}

export default PetDetail
