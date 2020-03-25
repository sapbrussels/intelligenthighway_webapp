import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// eslint-disable-next-line
const mapStyles = {
  width: '100%',
  height: '100%'
};

  export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
         }}
            onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>

<Map google={this.props.google}
initialCenter={{
  lat: -2.2884,
  lng: 36.8233
 }}
    onClick={this.onMapClicked}>
  <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

  <InfoWindow
    marker={this.state.activeMarker}
    visible={this.state.showingInfoWindow}>
      <div>
        <h1>{this.state.selectedPlace.name}</h1>
      </div>
  </InfoWindow>
</Map>
      );
    }
  }
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCrzE-PlXOFJufQ35Ci4Xz5yRyFs7x9tuA'
})(MapContainer);