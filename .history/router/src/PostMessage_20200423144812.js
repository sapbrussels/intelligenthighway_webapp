import React from 'react';
import {subscribe} from 'mqtt-react';
 
export class PostMessage extends React.Component {
    
  sendMessage(e) {
      e.preventDefault();
      //MQTT client is passed on
      const { mqtt } = this.props;
      mqtt.publish('LEDON', 'on');
  }  
  
  render() {
    return (
      <button onClick={this.sendMessage.bind(this)}>
        indicative light
      </button>
    );
  }
}

export default subscribe({
    topic: 'streetlight'
})(PostMessage)
