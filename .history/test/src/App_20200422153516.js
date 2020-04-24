import React, { Component } from 'react';
import './App.css';
import MessageContainer from './MessageContainer.js';
import {Connector} from "mqtt-react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <MessageContainer/>
            </div>
        );
    }
}

/*export default () => (
    <Connector mqttProps={{
      host: "farmer.cloudmqtt.com",
      protocol: "wss",
      clientId: "4ewf6wegwe",
      port: 35330,
      username: 'lmxssblr',
      password: 'Rrtmo0N4p01v',
      rejectUnauthorized: false
    }}>
        <App />
    </Connector>
);*/

export default () => (
    <Connector mqttProps={{
      host: "35.195.197.206",
      protocol: "ws",
      clientId: "4ewf6wegwe",
      port: 8080,
      rejectUnauthorized: false,
        path: "/mqtt"
    }}>
        <App />
    </Connector>
);