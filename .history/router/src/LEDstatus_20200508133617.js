import React from 'react';
import { subscribe } from 'mqtt-react';
import {Rectangle } from 'react-rectangle';


//
class LEDstatus extends React.Component {
  constructor(){
    super();
    this.state = {
      lastStatus: <Rectangle aspectRatio={[5, 3]}>
      <div style={{ background: '#607d8b', width: '100%', height: '100%' }} />
    </Rectangle>
    }
  }

  componentDidUpdate() {
    if(this.props.data && this.props.data.length > 0) {
      const data = this.props.data;
      const lastData = data[0]

      if(this.props.id === lastData.id && this.state.lastStatus !== lastData.status) {
        this.setState({
          lastStatus: lastData.status
        })
      }
    }
  }

  render() {
    return <div>{ this.state.lastStatus }</div>
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
