import React, { useState } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import TrackerMarker from "./TrackerMarker";

import styled from "styled-components";
import { trackersData } from "../data/trackers";

const StyledMapContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Map = (props) => {
  const { center, zoom, trackers, activeTracker, setActiveTracker } = props;

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyABEgmvXDv5ubrnRYuFN7GYkAuwBouwNrY" }}
      defaultCenter={center}
      defaultZoom={zoom}
      yesIWantToUseGoogleMapApiInternals
      onChildClick={(key, childProps) => setActiveTracker(trackers[key - 1])}

      // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
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

Map.propTypes = {};

export default Map;
