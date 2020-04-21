import React from 'react';
import './App.css';
import {Connector} from "mqtt-react";

 
export default () => (
  <Connector mqttProps="ws://farmer.cloudmqtt.com:35330, 'caonegam', 'LkRI4RXywc0b'">
  <h1>Does it work ?</h1>
  </Connector>
);



