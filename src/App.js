import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Dashboard from "./Dashboard/Dashboard";
import Login from './UserServices/Login';
import Register from './UserServices/Register';
import MyPlayers from './Players/MyPlayers/MyPlayers';
import AddPlayer from './Players/AddPlayer/AddPlayer';
import PlayerDetails from './Players/PlayerDetails/PlayerDetails';
import DeletePlayer from './Players/DeletePlayer/DeletePlayer';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard/:team?" component={Dashboard} />
                    <Route path="/myplayers" component={MyPlayers} />
                    <Route path="/addplayer" component={AddPlayer} />
                    <Route path="/player-details/:id" component={PlayerDetails}/>
                    <Route path="/delete" component={DeletePlayer}/>
                </Switch>
                <Footer/>
            </Router>
        )
    }
}

export default App;