import React from '../../../node_modules/react';
import './PlayerInfo.css';

class PlayerInfo extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 1
            }
        }

        counterIncrease = () => {
            this.setState({counter: this.state.counter + 1});
        }

    render() {
        const { player } = this.props;
        return  <div>
                    <h3>{player.name}</h3>
                    <p>Team: {player.team}</p>
                    <p className="img"><img src={player.imageURL} alt="playerImage"/></p>
                    <p className="description">{player.description}</p>
                    {/* <button onClick={this.counterIncrease}>Counter: {this.state.counter}</button> */}
                </div>
        
    }
}

export default PlayerInfo;
