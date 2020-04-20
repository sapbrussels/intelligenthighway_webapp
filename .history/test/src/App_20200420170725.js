
import React, { Component } from 'react';
import logo from './nearForm-logo.svg';
import './App.css';
import { Connector } from 'mqtt-react';


import {subscribe} from 'mqtt-react';

subscribe({topic: '@near/demo'});


class App extends Component {
  render() {
    return (
      <Connector mqttProps="ws://test.mosca.io/">
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to our MQTT-Demo</h2>
        </div>

      </div>
      </Connector>
    );
  }
}
export default App;