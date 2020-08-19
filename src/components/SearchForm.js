// @ts-check
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SearchIcon from "../assets/icons/search.svg";

const StyledSearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  border: ${(props) => `1px solid ${props.theme.colors.primaryLight}`};
  border-radius: 4px;
`;

const StyledSearchFormIconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  pointer-events: none;
`;

const StyledSearchFormInput = styled.input`
  border: none;
  border-radius: 4px;
  font-size: 18px;
  padding: 1rem 1rem 1rem 2.75rem;
  width: 100%;

  &::placeholder {
    color: #ccc8c8;
  }
`;

const SearchForm = (props) => {
  const { placeholder, onSubmit } = props;

  return (
    <StyledSearchForm onSubmit={onSubmit}>
      <StyledSearchFormIconWrapper>
        <img src={SearchIcon} alt="Search Icon" />
      </StyledSearchFormIconWrapper>
      <StyledSearchFormInput
        name="query"
        type="text"
        placeholder={placeholder}
      />
    </StyledSearchForm>
  );
};

SearchForm.defaultProps = {
  placeholder: "Enter Tracker or Shipment ID",
};

SearchForm.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
