import React from 'react';
import { subscribe } from 'mqtt-react';
 
// Messages are passed on the "data" prop
const MessageList = (props) => (
  <ul>
    {props.data.map( message => <li>{message}</li> )}
  </ul>
);
console.log(MessageList);
 
// simple subscription to messages on the "@test/demo" topic
export default subscribe({
  topic: 'streetlight/one'
})(MessageList)
