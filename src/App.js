import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import Dashboard from "./Dashboard/Dashboard";
import Login from './UserServices/Login';
import Register from './UserServices/Register';
import MyPlayers from './Players/MyPlayers/MyPlayers';
import AddPlayer from './Players/AddPlayer/AddPlayer';
import PlayerDetails from './Players/PlayerDetails/PlayerDetails';

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard/:team?" component={Dashboard} />
            <Route path="/myplayers" component={MyPlayers} />
            <Route path="/addplayer" component={AddPlayer} />
            <Route path="/player-details" component={PlayerDetails}/>
        </Router>
    )
}

export default App;