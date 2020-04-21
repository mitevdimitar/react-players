import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
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
import firebase from './Services/firebase';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            user: null
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((userInfo) => {
            if (userInfo) {
                this.setState({user: userInfo})
            } else {
                this.setState({user: null})
            }
          });
    }

    render() {
        return (
            <Router>
                <Header user={this.state.user}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard/:team?" component={Dashboard} />
                    <Route path="/player-details/:id" component={PlayerDetails}/>
                    <Route path="/delete" component={DeletePlayer}/>
                    {this.state.user ? (
                    <Route path="/myplayers" render={() => <MyPlayers user={this.state.user}/>} />
                    ) : (
                    <Redirect to="/" />)}
                    {this.state.user ? (
                    <Route path="/addplayer" render={() => <AddPlayer user={this.state.user} />}/>
                    ) : (
                    <Redirect to="/" />)}
                </Switch>
                <Footer/>
            </Router>
        )
    }
}

export default App;