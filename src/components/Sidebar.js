import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SearchForm } from ".";
import TrackerList from "./TrackerList";

const StyledSidebar = styled.section`
  background-color: ${(props) => props.theme.colors.offWhite};
  padding: 6rem 3rem 4rem;
  overflow: hidden;
  height: 100vh;
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
      <TrackerList
        trackers={trackers}
        activeTracker={activeTracker}
        setActiveTracker={setActiveTracker}
      />
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  handleSearchFormSubmit: PropTypes.func.isRequired,
};

export default Sidebar;
