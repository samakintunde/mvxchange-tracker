import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextButton from "./TextButton";

const StyledTrackerView = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  font-size: 16px;

  .tracker-id {
    text-align: right;
  }
`;

const StyledTrackerTable = styled.table`
  margin-top: 3.5rem;
  width: 90%;

  tr {
    border-spacing: 0.75rem;
  }
  td {
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
  }

  td:nth-child(1) {
    color: #767474;
  }

  td:nth-child(2) {
    font-weight: 700;
  }
`;

const TrackerView = (props) => {
  const { tracker, setActiveTracker } = props;

  const handleExitTrackerView = () => {
    setActiveTracker(null);
  };

  return (
    <StyledTrackerView className="tracker-view">
      <div>
        <div className="tracker-id">Tracker ID: {tracker.title}</div>
        <StyledTrackerTable>
          <tbody>
            <tr>
              <td>Location:</td>
              <td>
                {tracker.origin} - {tracker.destination}
              </td>
            </tr>
            <tr>
              <td>Current Location:</td>
              <td>Lekki Phase I</td>
            </tr>
            <tr>
              <td>Shipment ID:</td>
              <td>{tracker.shipmentId}</td>
            </tr>
            <tr>
              <td>Last Update:</td>
              <td>38 mins ago</td>
            </tr>
          </tbody>
        </StyledTrackerTable>
      </div>

      <TextButton onClick={handleExitTrackerView}>Back to List</TextButton>
    </StyledTrackerView>
  );
};

TrackerView.propTypes = {};

export default TrackerView;
