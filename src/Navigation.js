import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import Dashboard from "./Dashboard/Dashboard";

const Navigation = () => {
    return (
        <Router>
            <Route exact path="/" component={Home}></Route>
            <Route path="/dashboard/:team?" component={Dashboard}></Route>
        </Router>
    )
}

export default Navigation;