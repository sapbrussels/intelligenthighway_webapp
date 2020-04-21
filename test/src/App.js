import React, { Component } from 'react';
import './App.css';
import PostMqtt from './PostMessage.js';
import {Connector} from "mqtt-react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <PostMqtt/>
            </div>
        );
    }
}

export default () => (
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
);
