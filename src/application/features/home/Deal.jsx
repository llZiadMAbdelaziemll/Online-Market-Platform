import React from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Description from "../../ui/Description";
import DateCounter from "../../ui/DateCounter";
import Code from "../../ui/Code";

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
              <Code>100%</Code>
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
