import React from "react";
import styled from "styled-components";
import CategoriesList from "./CategoriesList";
import Container from "./Container";
import Row from "./Row";
import SectionHeader from "./SectionHeader";
import DecordCard from "./DecordCard";

const StyledCategories = styled.section`
  margin: 10rem 0;
`;
const Categories = () => {
  return (
    <StyledCategories>
      <Container>
        <Row>
          <CategoriesList />
          <DecordCard />
          <DecordCard />
        </Row>
      </Container>
    </StyledCategories>
  );
};

export default Categories;
