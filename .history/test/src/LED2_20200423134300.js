import React from 'react';
import { subscribe } from 'mqtt-react';
 
// Messages are passed on the "data" prop
const MessageList = (props) => (
  <ul>
    {props.data.map(<li>{message}</li>)}
  </ul>
);
// simple subscription to messages on the "@test/demo" topic
export default subscribe({
  topic1: 'streetlightone',
  topic2: 'Streetlighttwo'
})(MessageList)