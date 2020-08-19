import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TrackerListItem from "./TrackerListItem";
import { trackersData } from "../data/trackers";
import TrackerView from "./TrackerView";

const StyledTrackerList = styled.section`
  height: 100%;

  flex: 1 1 auto;
  border-radius: 4px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const StyledTrackerListHeading = styled.div`
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
`;

const StyledTrackerListBody = styled.ul`
  background-color: white;
  padding-right: 1rem;
  height: 100%;
  overflow-y: scroll;

  > * + * {
    border-top: ${(props) => `1px solid ${props.theme.colors.gray}`};
  }
`;

const TrackerList = (props) => {
  const { trackers, activeTracker, setActiveTracker } = props;

  return (
    <StyledTrackerList>
      <StyledTrackerListHeading>
        <h2>Trackers</h2>
      </StyledTrackerListHeading>
      <StyledTrackerListBody>
        {activeTracker ? (
          <TrackerView
            tracker={activeTracker}
            setActiveTracker={setActiveTracker}
          />
        ) : (
          trackers.map((tracker) => (
            <li key={tracker.id} onClick={() => setActiveTracker(tracker)}>
              <TrackerListItem
                tracker={tracker}
                active={activeTracker?.id === tracker.id}
              />
            </li>
          ))
        )}
      </StyledTrackerListBody>
    </StyledTrackerList>
  );
};

TrackerList.propTypes = {
  trackers: PropTypes.array.isRequired,
};

export default TrackerList;
