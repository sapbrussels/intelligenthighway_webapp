  
import React, { Component } from 'react';
import './App.css';
import PostMqtt from './PostMessage.js';
import {Connector} from "mqtt-react";
import { subscribe } from 'mqtt-react';
 

class App extends Component {
    render() {
        return (
            <div className="App">
                <LED1/>
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

    </Connector>
);


import React from 'react';
import { subscribe } from 'mqtt-react';
 
// Messages are passed on the "data" prop
const MessageList = (props) => (
  <ul>
    {props.data.map( message => <body>{message}</body> )}
  </ul>
);
 
// simple subscription to messages on the "@test/demo" topic
export default subscribe({
  topic: 'Streetlighttwo'
})(MessageList)