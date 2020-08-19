import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SearchForm } from ".";
import TrackerList from "./TrackerList";

const StyledSidebar = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.offWhite};
  padding: 6rem 3rem 4rem;
  overflow: hidden;
  height: calc(100vh - 10rem);

  .trackers-section {
    margin-top: 1.5rem;
    /* flex: 1 1 auto; */
    /* height: 100%; */
    /* overflow: hidden; */
  }
`;

const Sidebar = (props) => {
  const {
    handleSearchFormSubmit,
    handleSearchQueryChange,
    trackers,
    activeTracker,
    setActiveTracker,
  } = props;

  return (
    <StyledSidebar>
      <SearchForm
        onSubmit={handleSearchFormSubmit}
        handleSearchQueryChange={handleSearchQueryChange}
      />
      <div className="trackers-section">
        <TrackerList
          trackers={trackers}
          activeTracker={activeTracker}
          setActiveTracker={setActiveTracker}
        />
      </div>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  handleSearchFormSubmit: PropTypes.func.isRequired,
};

export default Sidebar;
