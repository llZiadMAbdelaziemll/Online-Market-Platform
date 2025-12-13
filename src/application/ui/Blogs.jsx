import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Row from "./Row";
import SectionHeader from "./SectionHeader";

import BlogCard from "./BlogCard";
const StyledPopularProducts = styled.section`
  margin: 10rem 0;
`;
const Blogs = () => {
  return (
    <StyledPopularProducts>
      <Container>
        <Row>
          <SectionHeader>
            <SectionHeader.HeaderHead>Latest News</SectionHeader.HeaderHead>
            <SectionHeader.HeaderDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore lacus vel facilisis.
            </SectionHeader.HeaderDescription>
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
