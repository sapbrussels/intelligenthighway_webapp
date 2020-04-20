import React, { useState, Fragment } from 'react';
import './App.css';

var mqtt = require('mqtt');
var options = {
    User: "caonegam",
    Password: "LkRI4RXywc0b",
};
var client = mqtt.connect('mqtt:farmer.cloudmqtt.com:13365', options);

// preciouschicken.com is the MQTT topic
client.subscribe('Streetlight');

function App() {
  var note;
  client.on('message', function (topic, message) {
    note = message.toString();
    // Updates React state with message 
    setMesg(note);
    console.log(note);
    client.end();
    });

  // Sets default React state 
  const [mesg, setMesg] = useState(<Fragment><em>nothing heard</em></Fragment>);

  return (
    <div className="App">
    <header className="App-header">
    <h1>A taste of MQTT in React</h1>
    <p>The message is: {mesg}</p>
        <p>
        <a href="https://www.preciouschicken.com/blog/posts/a-taste-of-mqtt-in-react/"    
        style={{
            color: 'white'
        }}>preciouschicken.com/blog/posts/a-taste-of-mqtt-in-react/</a>
        </p>
        </header>
        </div>
  );
}

export default App;