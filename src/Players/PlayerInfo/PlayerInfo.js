import React, {Fragment} from '../../../node_modules/react';
import './PlayerInfo.css';

function PlayerInfo(props) {

        const { player } = props;
        return  <Fragment>
                    <h3>{player.name}</h3>
                    <p>Team: {player.team}</p>
                    <p className="img"><img src={player.imageURL} alt="playerImage"/></p>
                    {/* <p className="description">{player.description}</p> */}
                </Fragment>
}

export default PlayerInfo;
