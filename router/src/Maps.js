import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '73%',
  height: '50%',
  padding: '20px',
  borderRadius:'10px',

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
             zoom={14}
             style={mapStyles}
             initialCenter={{
              lat: 50.87, 
              lng: 4.405
             }}
             onClick={this.onMapClicked}>
        <Marker
         onClick={this.onMarkerClick}
         title={'The marker`s title will appear as a tooltip.'}
         name={'Boulevard Léopold III 2.3'}
         position={{lat: 50.870959, lng: 4.405819}}
                />

         <Marker
         onClick={this.onMarkerClick}
         title={'The marker`s title will appear as a tooltip.'}
         name={'Boulevard Léopold III 2.4'}
         position={{lat: 50.870418, lng: 4.405306}}
                />

         <Marker
         onClick={this.onMarkerClick}
         title={'The marker`s title will appear as a tooltip.'}
         name={'Boulevard Léopold III 2.5'}
         position={{lat: 50.869850, lng: 4.404810}}
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

