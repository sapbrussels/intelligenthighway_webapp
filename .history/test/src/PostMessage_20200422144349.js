import React from 'react';
import { subscribe } from 'mqtt-react';

const MessageList = (props) => (
  <ul>
    {props.data.map( message => <li>{message}</li> )}
  </ul>
  );

export class PostMessage extends React.Component {

    sendMessage(e) {
        e.preventDefault();
        //MQTT client is passed on
        const { mqtt } = this.props;
        mqtt.publish('Streetlight', 'My Message');
    }
  
    render() {
        return (
            <button onClick={this.sendMessage.bind(this)}>
                Send Message
            </button>
       
        );
    }
}

export default subscribe({
    topic: 'Streetlight'
  
})(PostMessage)
