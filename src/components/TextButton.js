import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const TextButton = (props) => {
  const { children, onClick } = props;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default TextButton;
