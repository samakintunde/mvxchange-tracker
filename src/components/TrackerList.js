import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TrackerListItem from "./TrackerListItem";
import TrackerView from "./TrackerView";

const StyledTrackerList = styled.section`
  height: calc(100vh - 14rem);
  flex-grow: 20;
  margin-top: 1.5rem;
  /* height: 100%;
  max-height: 100vh; */
  border-radius: 4px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const StyledTrackerListHeading = styled.div`
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;

  h2 {
    margin-left: 1rem;
  }
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
        {activeTracker && (
          <span onClick={() => setActiveTracker(null)}>
            <img
              width="24"
              height="24"
              src="https://icongr.am/feather/arrow-left.svg?size=24&color=#ffffff"
              alt="Back to results"
            />
          </span>
        )}
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
