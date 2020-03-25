import React from'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

function Map(){
  return(
  <GoogleMap 
  width={40}
  length={50}
  defaultZoom={10} 
  defaultCenter={{lat:50.868,lng:4.404}}
  />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export default function App(){
  return (
  <div style={{ width: "50vw", height: "30vh" }}>
    <WrappedMap 
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
      process.env.REACT_APP_GOOGLE_KEY
    }`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    />
   </div>
  );
}