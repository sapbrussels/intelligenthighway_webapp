import React from 'react';
import { subscribe } from 'mqtt-react';
import Rectangle from 'react-rectangle';

//
class LEDstatus extends React.Component {
  constructor(){
    super();
    this.state = {
      lastStatus: <Rectangle aspectRatio={[5, 3]}>
      <div style={{ background: '#FF0000', width: '50%', height: '40%' }} />
    </Rectangle> // red reactangle at the start
    }
  }

  componentDidUpdate() {
    if(this.props.data && this.props.data.length > 0) {
      const data = this.props.data;
      const lastData = data[0]

      if(this.props.id === lastData.id && this.state.lastStatus !== lastData.status) { /* check 
                                                                                       to see if the current 
                                                                                       status if different 
                                                                                       to the previous status*/
        this.setState({
          lastStatus: lastData.status
        })
      }
      
    }
  }

  render() {
    return <div>{ this.state.laststatus }</div> // renders the status of the light
  }
}

// This topic expects following format:
// { "id": "2", "status":"off"}
//
// id: is the id of the streetlight
// status: is on/off.

export default subscribe({
  topic: 'streetlight'
})(LEDstatus)
