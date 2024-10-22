import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  margin: '0 auto',
  display: 'block',
};

const center = {
    lat: 33.8869,  
    lng: 9.5375,   
  };
  

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAzyKnCJlGfqpCOuHnzy5yDv74kaZcc3RQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
    </LoadScript>
  );
}

export default MapComponent;
