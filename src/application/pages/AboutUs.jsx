import React from "react";
import styled from "styled-components";

import BreadCrumb from "../ui/BreadCrumb";
import Meta from "../ui/Meta";
import Container from "../ui/Container";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import Description from "../ui/Description";
import Statistics from "../ui/Statistics";
import Services from "../ui/Services";
import AboutServices from "../ui/AboutServices";

const StyledAbout = styled.div`
  margin: 10rem 0;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 50%;
`;
const Img = styled.img`
  border-radius: var(--border-radius-sm);
`;
const AboutUs = () => {
  return (
    <>
      <Meta title={"About us"} />
      <BreadCrumb title="About us" />
      <StyledAbout>
        <Container>
          <Row>
            <Content>
              <Heading as="h2">About The Carrot</Heading>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione, recusandae necessitatibus quasi incidunt alias adipisci
                pariatur earum iure beatae assumenda rerum quod. Tempora magni
                autem a voluptatibus neque.
              </Description>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione, recusandae necessitatibus quasi incidunt alias adipisci
                pariatur earum iure beatae assumenda rerum quod. Tempora magni
                autem a voluptatibus neque.
              </Description>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione, recusandae necessitatibus quasi incidunt alias adipisci
                pariatur earum iure beatae assumenda rerum quod. Tempora magni
                autem a voluptatibus neque.
              </Description>
              <Statistics />
            </Content>
            <Img src="./1.jpg" alt="page not found" />
          </Row>
          <Row>
            <AboutServices />
          </Row>
        </Container>
      </StyledAbout>
    </>
  );
};

export default AboutUs;
