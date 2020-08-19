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
  max-height: 100vh;
  overflow: hidden;

  .trackers-section {
    margin-top: 1.5rem;
    flex-grow: 1;
    flex-basis: 100%;
  }
`;

const Sidebar = (props) => {
  const { handleSearchFormSubmit } = props;

  return (
    <StyledSidebar>
      <SearchForm onSubmit={handleSearchFormSubmit} />
      <div className="trackers-section">
        <TrackerList />
      </div>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  handleSearchFormSubmit: PropTypes.func.isRequired,
};

export default Sidebar;
