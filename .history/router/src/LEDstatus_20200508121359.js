import React from 'react';
import { subscribe } from 'mqtt-react';
import { Circle } from 'react-color';


//
class LEDstatus extends React.Component {
  constructor(){
    super();
  this.state = {
      lastStatus:  <Circle    // display red rectangle at the start
      
                    aspectRatio={[5, 5]}>
                    <div style={{ background: '#FF0000', width: '40%', height: '60%' }} />

                  </Circle >
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
       /* if (lastData.status === "off")
        {
          lastData.status= <Rectangle aspectRatio={[5, 3]}>
          <div style={{ background: '#607d8b', width: '100%', height: '100%' }} />
        </Rectangle>
        }else
        lastData.status= <Rectangle aspectRatio={[5, 3]}>
        <div style={{ background: '#607d8b', width: '100%', height: '100%' }} />
      </Rectangle>
*/
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