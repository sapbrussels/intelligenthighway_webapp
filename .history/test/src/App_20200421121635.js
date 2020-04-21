import React, {Component} from 'react';
import { Connector } from 'mqtt-react';
import App from './components/App';
import { Component } from 'react';
 
export default () => (
  <Connector mqttProps="ws://farmer.cloudmqtt.com/">
    <App />
  </Connector>
);