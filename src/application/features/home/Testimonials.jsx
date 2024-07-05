import React from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import Row from "../../ui/Row";
import SectionHeader from "../../ui/SectionHeader";
import TestimonialsCard from "./TestimonialsCard";
const StyledTestimonials = styled.section`
  margin: 10rem 0;
`;
const Testimonials = () => {
  return (
    <StyledTestimonials>
      <Container>
        <Row>
          <SectionHeader>
            <SectionHeader.HeaderHead>
              Great Words From People
            </SectionHeader.HeaderHead>
            <SectionHeader.HeaderDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore lacus vel facilisis.
            </SectionHeader.HeaderDescription>
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
