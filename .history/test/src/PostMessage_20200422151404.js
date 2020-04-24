import React from 'react';
import { subscribe } from 'mqtt-react';
 
// simple subscription to messages on the "@test/demo" topic
export default subscribe({
  topic: 'Streetlight'
})
