import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTrackerPopup = styled.div`
  border-radius: 4px;
  overflow: hidden;

  span {
    color: #5b5b5b;
  }
`;

const StyledTrackerPopupBox = styled.div`
  padding: 1.25rem 2rem;
  background-color: white;
  min-width: 8rem;
  width: max-content;

  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.33;
  }

  .location,
  .time {
    font-size: 14px;
    line-height: 1.4;
  }

  .link {
    margin-top: 0.25rem;

    a {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const StyledTrackerPopupAnchor = styled.div`
  box-sizing: border-box;
  border: 1rem solid white;
  border-bottom-left-radius: 4px;
  width: 1rem;
  height: 1rem;
  border-bottom-color: transparent;
  border-right-color: transparent;
`;

const StyledTrackerPopupCloseBtn = styled.button`
  background: transparent;
  border: none;
  transition: 0.3s ease-in-out;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  &:hover {
    color: salmon;
  }
`;

const TrackerPopup = (props) => {
  const { address, shipmentId, updatedAt } = props;

  return (
    <StyledTrackerPopup>
      <StyledTrackerPopupBox>
        <h6 className="title">{shipmentId}</h6>
        <p className="location">Current Location: {address}</p>
        <p className="time">Last update: {updatedAt}</p>
        {/* <div className="link">
          <a href="#">View shipment details</a>
        </div> */}
      </StyledTrackerPopupBox>
      <StyledTrackerPopupAnchor></StyledTrackerPopupAnchor>
      <StyledTrackerPopupCloseBtn>&times;</StyledTrackerPopupCloseBtn>
    </StyledTrackerPopup>
  );
};

TrackerPopup.defaultProps = {
  address: "Lekki Phase I",
  shipmentId: "MVXT0000456",
  updatedAt: "18mins ago",
};

TrackerPopup.propTypes = {};

export default TrackerPopup;
