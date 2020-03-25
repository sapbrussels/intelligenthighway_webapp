import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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
             onClick={this.onMapClicked}>
        <Marker
         onClick={this.onMarkerClick}
         title={'The marker`s title will appear as a tooltip.'}
         name={'Boulevard Léopold III 2.3'}
         position={{lat: 50.87, lng: 4.405}}
                />

         <Marker
         onClick={this.onMarkerClick}
         title={'The marker`s title will appear as a tooltip.'}
         name={''}
         position={{lat: 38.778519, lng: -122.405640}}
                />
        
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

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

