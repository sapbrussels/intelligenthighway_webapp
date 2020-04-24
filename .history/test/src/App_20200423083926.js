import React, { Component } from 'react';
import './App.css';
import {Connector} from "mqtt-react";
import LED1 from './LED2';
import LED2 from './LED2';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LED1/>
                <LED2/>
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