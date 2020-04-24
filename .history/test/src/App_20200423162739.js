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