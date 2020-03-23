import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '70%',
  height: '70%'
};

export class MapContainer extends Component {
  render() {
    return (
      <React.Fragment>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
        />
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCwOxokk6KXrREeTh6bKyy9DkFupKnBavA'
})(MapContainer);