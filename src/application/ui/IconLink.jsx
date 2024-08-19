import React from "react";
import ButtonIcon from "./ButtonIcon";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledIconLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  /* transition: all 0.5s; */
  &:hover {
    color: var(--color-green-400);
  }

  & span {
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const IconLink = ({ children, to }) => {
  return <StyledIconLink to={to}>{children}</StyledIconLink>;
};

export default IconLink;
