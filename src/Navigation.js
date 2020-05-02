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
import ErrorPage from './Error/Error';
import Fanshop from './Fanshop/Fanshop';
import firebase from './Services/firebase';
import {UserContext} from './ContextWrapper';

class Navigation extends React.Component {

    static contextType = UserContext;

    constructor(props) {
        super(props);
        this.state={
            user: null,
            isLogged: false,
            loaded: false
        };
    }

    componentDidMount() {
        this.setState({loaded: true});
        firebase.auth().onAuthStateChanged((userInfo) => {
            if (userInfo) {
                this.setState({user: userInfo,
                isLogged:true})
            } else {
                this.setState({user: null,
                isLogged: false})
            }
          });
    }

    render() {
        return (
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/dashboard/:team?" component={Dashboard} />
                        <Route path="/fanshop" component={Fanshop} />
                        <Route exact path="/player-details/:id" component={PlayerDetails}/>
                        <Route path="/delete/:id" component={DeletePlayer}/>
                        {this.context.isLogged && <Route path="/myplayers" component={MyPlayers}/>}
                        {this.context.isLogged && <Route exact path="/addplayer" component={AddPlayer}/>}
                        {this.state.loaded && <Route path="*" component={ErrorPage}/>}
                    </Switch>
                    <Footer/>
                </Router>
        )
    }
}

export default Navigation;