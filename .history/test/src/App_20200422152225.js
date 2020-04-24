import React, { Component } from 'react';
import './App.css';
import { Connector } from 'mqtt-react';

import _MessageContainer from './MessageContainer.js';
import {subscribe} from 'mqtt-react';

const MessageContainer = subscribe({topic: 'Streetlight'})(_MessageContainer);


class App extends Component {
  render() {
    return (
        <Connector mqttProps={{host: "35.195.197.206", protocol: "ws", clientId: "4ewf6wegwe", port: 8080, rejectUnauthorized: false, path: "/mqtt" }}>
         <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to our MQTT-Demo</h2>
        </div>
        <MessageContainer/> 
      </div>
        </Connector>
    );
  }
}

export default App;