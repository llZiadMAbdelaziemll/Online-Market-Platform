import React from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import Row from "../../ui/Row";
import TestimonialsCard from "./TestimonialsCard";
import Heading from "../../ui/Heading";
import Description from "../../ui/Description";

const StyledTestimonials = styled.section`
  margin: 10rem 0;
`;

const SectionHeader = styled.div`
  margin: auto !important;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  text-align: center;
  margin-bottom: 3rem !important;
`;

const Testimonials = () => {
  return (
    <StyledTestimonials>
      <Container>
        <Row>
          <SectionHeader>
            <Heading as="h2">Great Words From People</Heading>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore lacus vel facilisis.
            </Description>
          </SectionHeader>
        </Row>
        <Row>
          <TestimonialsCard />
          <TestimonialsCard />
          <TestimonialsCard />
        </Row>
      </Container>
    </StyledTestimonials>
  );
};

export default Testimonials;
