import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from'./App';
import Maintenance from'./Maintenance';


export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/Maintenance" exact component={Maintenance} />
                </Switch>
            </Router>
        )
    }
}