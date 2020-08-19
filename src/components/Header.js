import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

import MVXchangeLogo from "../assets/images/logo.svg";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 3rem;
  z-index: 5;
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={MVXchangeLogo} alt="MVXchange Logo" />
    </StyledHeader>
  );
};

Header.propTypes = {};

export default Header;
