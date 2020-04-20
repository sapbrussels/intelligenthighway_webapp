import React, { Component } from 'react'
import RowData from './RowData'

import io from 'socket.io-client'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cities: [
      ]
    }
    this.socket = io('farmer.cloudmqtt.com:13365')
    this.updateData = this.updateData.bind(this)
    this.createId = this.createId.bind(this)
  }

  createId () {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  componentDidMount () {
    this.socket.on('app', (received) => {
      this.updateData(received)
    })
  }

  componentWillUnmount () {
    this.socket.close()
  }

  updateData (received) {
    // List of current cities in state
    const cityList = this.state.cities.map(city => city.name)
    if (cityList.includes(received.name)) {
      // Updating a city
      this.setState(prevState => ({
        cities: prevState.cities.map(
          city => (city.name !== received.name) ? city : {...received, id: city.id}
        )
      }))
    } else {
      // New city being added
      this.setState(prevState => ({
        cities: [
          ...prevState.cities,
          {
            id: this.createId(),
            ...received
          }
        ]
      }))
    }
  }

  render () {
    const cityRows = this.state.cities.map(RowData)
    return (
      <div className='container'>
        <div className='mt-3 text-center'>
        
        </div>
        <span className='spacer' />
        <div className='row'>
          {cityRows}
        </div>
      </div>
    )
  }
}

export default App