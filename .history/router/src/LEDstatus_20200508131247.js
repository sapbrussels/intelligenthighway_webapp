import React from 'react';
import { subscribe } from 'mqtt-react';
<<<<<<< HEAD
import Rectangle from 'react-rectangle';
=======
>>>>>>> df2d8c4e4aaa29371c2bd6685234ce6ddbad4b29


//
class LEDstatus extends React.Component {
  constructor(){
    super();

  this.state = {
      lastStatus:  
    this.state = {
      lastStatus: "off"

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
       if (lastData.status === "off")
        {
          lastData.status= <Rectangle aspectRatio={[5, 3]}>
          <div style={{ background: '#607d8b', width: '100%', height: '100%' }} />
        </Rectangle>
        }else
        lastData.status= <Rectangle aspectRatio={[5, 3]}>
        <div style={{ background: '#607d8b', width: '100%', height: '100%' }} />
      </Rectangle>


    }
   
  }
}

render() {
   
  return <div>{ this.state.lastStatus }</div>
}
}
=======
      if(this.props.id == lastData.id && this.state.lastStatus != lastData.status) {
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

>>>>>>> df2d8c4e4aaa29371c2bd6685234ce6ddbad4b29
// This topic expects following format:
// { "id": "2", "status":"off"}
//
// id: is the id of the streetlight
// status: is on/off.

export default subscribe({
  topic: 'streetlight'
<<<<<<< HEAD
})(LEDstatus)
=======
})(LEDstatus)
>>>>>>> df2d8c4e4aaa29371c2bd6685234ce6ddbad4b29
