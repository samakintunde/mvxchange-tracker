import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TrackerListItem from "./TrackerListItem";

const StyledTrackerList = styled.section`
  height: calc(100vh - 15rem);
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
  const { trackers } = props;

  return (
    <StyledTrackerList>
      <StyledTrackerListHeading>
        <h2>Trackers</h2>
      </StyledTrackerListHeading>
      <StyledTrackerListBody>
        {trackers.map((tracker, index) => (
          <li key={index}>
            <TrackerListItem tracker={tracker} />
          </li>
        ))}
      </StyledTrackerListBody>
    </StyledTrackerList>
  );
};

TrackerList.defaultProps = {
  trackers: [
    {
      title: "4398293",
      origin: "Lagos",
      destination: "Portharcourt",
      shipmentId: "MVXT00004",
    },
    {
      title: "4398293",
      origin: "Lagos",
      destination: "Portharcourt",
      shipmentId: "MVXT00004",
    },
    {
      title: "4398293",
      origin: "Lagos",
      destination: "Portharcourt",
      shipmentId: "MVXT00004",
    },
    {
      title: "4398293",
      origin: "Lagos",
      destination: "Portharcourt",
      shipmentId: "MVXT00004",
    },
    {
      title: "4398293",
      origin: "Lagos",
      destination: "Portharcourt",
      shipmentId: "MVXT00004",
    },
    {
      title: "4398293",
      origin: "Lagos",
      destination: "Portharcourt",
      shipmentId: "MVXT00004",
    },
    {
      title: "4398293",
      origin: "Lagos",
      destination: "Portharcourt",
      shipmentId: "MVXT00004",
    },
    {
      title: "4398293",
      origin: "Lagos",
      destination: "Portharcourt",
      shipmentId: "MVXT00004",
    },
    {
      title: "4398293",
      origin: "Lagos",
      destination: "Portharcourt",
      shipmentId: "MVXT00004",
    },
    {
      title: "4398293",
      origin: "Lagos",
      destination: "Portharcourt",
      shipmentId: "MVXT00004",
    },
  ],
};

TrackerList.propTypes = {};

export default TrackerList;
