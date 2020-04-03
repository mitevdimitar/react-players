import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import Dashboard from "./Dashboard/Dashboard";
import Login from './UserServices/Login';
import Register from './UserServices/Register';

const Navigation = () => {
    return (
        <Router>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/dashboard/:team?" component={Dashboard}></Route>
        </Router>
    )
}

export default Navigation;