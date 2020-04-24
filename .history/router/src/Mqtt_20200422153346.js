import React, { Component } from 'react';
import MessageMqtt from './MessageMqtt.js';
import {Connector} from "mqtt-react";



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
        <App />
    </Connector>
);
