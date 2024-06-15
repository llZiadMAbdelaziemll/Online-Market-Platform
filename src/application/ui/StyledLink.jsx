import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinkTag = styled(Link)`
  transition: 0.3s ease-in-out;
  color: #777;
  font-size: 14px;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
  line-height: 2.6rem;
  letter-spacing: 0.3px;

  &:hover {
    color: var(--color-green-400);
  }
`;
const StyledLink = ({ children }) => {
  return <StyledLinkTag>{children}</StyledLinkTag>;
};

export default StyledLink;
