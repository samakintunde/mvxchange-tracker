import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTrackerListItem = styled.article`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 109, 255, 0.075);
  }

  > *:nth-child(1) {
    flex-grow: 1;
  }

  p {
    line-height: 1.375;
  }
`;

const StyledTrackerListItemTitle = styled.h6`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.44;
  color: #000000;
`;

const StyledTrackerListItemChip = styled.span`
  margin-top: 0.25rem;
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background-color: #ececec;
  border-radius: 8px;
  font-size: 14px;
`;

const TrackerListItem = (props) => {
  const { tracker } = props;

  return (
    <StyledTrackerListItem>
      <div>
        <StyledTrackerListItemTitle>
          Tracker ID: {tracker.title}
        </StyledTrackerListItemTitle>
        <p>
          Location: {tracker.origin} - {tracker.destination}
        </p>
        <StyledTrackerListItemChip>
          Shipment ID: {tracker.shipmentId}
        </StyledTrackerListItemChip>
      </div>
      <div>
        <svg
          width="19"
          height="33"
          viewBox="0 0 19 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.66762 31.9187L17.4666 19.1449C18.9619 17.6521 18.9703 15.2316 17.4853 13.7291L4.77531 0.86613C3.95349 0.0350098 2.8462 -0.218025 1.76292 0.224484C0.68178 0.666287 0.107625 1.71748 0.103574 2.88562L0.0100096 29.8655C0.00595358 31.035 0.572803 32.0895 1.65157 32.5388C2.73104 32.9895 3.83934 32.7441 4.66762 31.9187Z"
            fill="#CBCBCB"
          />
        </svg>
      </div>
    </StyledTrackerListItem>
  );
};

TrackerListItem.defaultProps = {
  tracker: {
    title: "4398293",
    origin: "Lagos",
    destination: "Portharcourt",
    shipmentID: "MVXT00004",
  },
};

TrackerListItem.propTypes = {
  tracker: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default TrackerListItem;
