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
    <Connector mqttProps="ws://farmer.cloudmqtt.com:35330">
        <App />
    </Connector>
);