import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '900px',
  height: '400px',
};

const libraries = ["places"];

const GoogleMaps = ({ onAddressSelect }) => {
  const [center, setCenter] = useState({ lat: 9.082, lng: 8.6753 });
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const input = inputRef.current;

      const autocomplete = new window.google.maps.places.Autocomplete(input);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          setCenter({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
          onAddressSelect(place.formatted_address); // Pass the selected address to the parent component
        }
      });
    }
  }, [inputRef, onAddressSelect]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCjDf0RYb6tjZJchSx8mjDGXDRQWGJuOSU" libraries={libraries}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Marker for selecting address */}
        <Marker
          position={center}
          draggable={true}
          onDragEnd={(e) => {
            setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() });
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;









// AIzaSyCjDf0RYb6tjZJchSx8mjDGXDRQWGJuOSU

    
    // const center = {
    //     lat: 9.0820, // Latitude of the map center
    //     lng: 8.6753, // Longitude of the map center
    //   };