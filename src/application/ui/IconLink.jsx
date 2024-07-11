import React from "react";
import ButtonIcon from "./ButtonIcon";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledIconLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: var(--color-green-400);
  }
`;
const Span = styled.span`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 500;
`;
const IconLink = ({ icon, name, to }) => {
  return (
    <StyledIconLink to={to}>
      <ButtonIcon>{icon}</ButtonIcon>
      <Span>{name}</Span>
    </StyledIconLink>
  );
};

export default IconLink;
