import React from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import Row from "../../ui/Row";

import BlogCard from "./BlogCard";
import Heading from "../../ui/Heading";
import Description from "../../ui/Description";
const StyledPopularProducts = styled.section`
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

const Blogs = () => {
  return (
    <StyledPopularProducts>
      <Container>
        <Row>
          <SectionHeader>
            <Heading as="h2">Latest News</Heading>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore lacus vel facilisis.
            </Description>
          </SectionHeader>
        </Row>
        <Row>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Row>
      </Container>
    </StyledPopularProducts>
  );
};

export default Blogs;
