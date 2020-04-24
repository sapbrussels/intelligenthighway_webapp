  
import React, { Component } from 'react';
import './App.css';
import {Connector} from "mqtt-react";
import LED1 from './LED1';

function App() {
  return (
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
}

export default App;
