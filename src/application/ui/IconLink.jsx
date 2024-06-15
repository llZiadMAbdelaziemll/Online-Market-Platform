import React from "react";
import ButtonIcon from "./ButtonIcon";
import styled from "styled-components";

const StyledIconLink = styled.span`
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
const IconLink = ({ icon, name }) => {
  return (
    <StyledIconLink>
      <ButtonIcon>{icon}</ButtonIcon>
      <Span>{name}</Span>
    </StyledIconLink>
  );
};

export default IconLink;
