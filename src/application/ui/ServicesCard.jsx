import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Description from "./Description";

const StyledServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.2rem;
  background-color: #f7f7f8;
  padding: 2.4rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid #e9e9e9;
`;
const StyledIcon = styled.div`
  margin: auto;
  margin-bottom: 0.5rem;
  & svg {
    color: var(--color-green-400);
    font-size: 4.3rem;
    line-height: 4rem;
  }
`;
const ServicesCard = ({ icon, topic }) => {
  return (
    <StyledServicesCard>
      <StyledIcon>{icon}</StyledIcon>
      <Heading as="h4">{topic}</Heading>
      <Description type="semiDescription">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </Description>
    </StyledServicesCard>
  );
};

export default ServicesCard;
