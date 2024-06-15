import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Row from "./Row";
import SectionHeader from "./SectionHeader";
import BasicCard from "./BasicCard";
import NewCard from "./NewCard";
import PopularProductOperations from "./PopularProductOperations";
const StyledPopularProducts = styled.section`
  margin-bottom: 10rem;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  max-width: 30.6rem;
`;
const RightSide = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
const PopularProducts = () => {
  return (
    <StyledPopularProducts>
      <Container>
        <Row>
          <SectionHeader>
            <SectionHeader.HeaderHead>
              Popular Products
            </SectionHeader.HeaderHead>
            <SectionHeader.HeaderDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore lacus vel facilisis.
            </SectionHeader.HeaderDescription>
          </SectionHeader>
        </Row>
        <Row>
          <LeftSide>
            <PopularProductOperations />
            <NewCard />
          </LeftSide>
          <RightSide>
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
          </RightSide>
        </Row>
      </Container>
    </StyledPopularProducts>
  );
};

export default PopularProducts;
