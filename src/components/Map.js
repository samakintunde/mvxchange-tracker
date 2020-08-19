import React from "react";
import GoogleMapReact from "google-map-react";
import TrackerMarker from "./TrackerMarker";
import { mapStyles } from "./mapStyles";

const Map = (props) => {
  const { center, zoom, trackers, activeTracker, setActiveTracker } = props;

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={center}
      center={activeTracker?.coordinates}
      defaultZoom={zoom}
      yesIWantToUseGoogleMapApiInternals
      options={{
        styles: mapStyles,
      }}
      onChildClick={(key, childProps) => setActiveTracker(trackers[key - 1])}
    >
      {trackers.map((tracker) => (
        <TrackerMarker
          key={tracker.id}
          lat={tracker.coordinates[0]}
          lng={tracker.coordinates[1]}
          onClick={() => setActiveTracker(tracker.id)}
          active={activeTracker?.id === tracker.id}
        />
      ))}
    </GoogleMapReact>
  );
};

Map.defaultProps = {
  center: [6.5349655, 3.3892904],
  zoom: 10,
};

export default Map;
