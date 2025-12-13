import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Row from "./Row";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import Description from "./Description";
import DateCounter from "./DateCounter";
const StyledDeal = styled.div`
  background: url(./deal/bg-deal.jpg) no-repeat;
  background-size: cover;
  height: 60rem;
  margin-bottom: 10rem;
`;
const Content = styled.div`
  max-width: 50rem;
  padding: 2.4rem;
  background-color: rgba(255, 255, 255, 0.22);
  border-radius: var(--border-radius-sm);
  box-shadow: -3px 3px 8px 5px rgba(0, 0, 0, 0.05);
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  /* margin-bottom: 1.2rem; */
`;
const Trust = styled.span`
  color: var(--color-green-400);
  font-weight: bold;
  font-size: 2rem;
`;
const Span = styled.span`
  color: #212529;
  font-size: 1.6rem;
  font-weight: 400;
  text-transform: uppercase;
`;

const Deal = () => {
  return (
    <StyledDeal>
      <Container>
        <Row>
          <Content>
            <Tag>
              <Trust>100%</Trust>
              <Span>Off</Span>
            </Tag>

            <Heading as="h3">Great deal on organic food.</Heading>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              <br />
              reiciendis beatae consequuntur.
            </Description>
            <DateCounter />
          </Content>
        </Row>
      </Container>
    </StyledDeal>
  );
};

export default Deal;
