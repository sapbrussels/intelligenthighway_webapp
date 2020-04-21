import React from 'react';
import './App.css';
import {Connector} from "mqtt-react";
import { subscribe } from 'mqtt-react';

 
const MessageContainer = subscribe({topic: '@near/demo'})(_MessageContainer);


class App extends Component {
  render() {
    return (
      <Connector mqttProps="ws://farmer.cloudmqtt.com:35330, 'caonegam', 'LkRI4RXywc0b' ">
      <div className="App">
        <div className="App-header">
          <h2>Welcome to our MQTT-Demo</h2>
        </div>
        <MessageContainer/> 
      </div>
      </Connector>
    );
  }
}

export default App;


