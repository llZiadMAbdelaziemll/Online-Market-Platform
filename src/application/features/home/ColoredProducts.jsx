import React from "react";
import styled from "styled-components";
import Container from "../../ui/Container";
import Row from "../../ui/Row";
import ColoredCard from "./ColoredCard";
const StyledColoredProducts = styled.section`
  margin-bottom: 10rem;
`;
const StyledCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const ColoredProducts = () => {
  return (
    <StyledColoredProducts>
      <Container>
        <Row>
          <StyledCard>
            <ColoredCard
              image="./coloredCard/1.jpg"
              name={
                <>
                  Healthy <br />
                  Bakery Products
                </>
              }
              discount="30"
            />
            <ColoredCard
              image="./coloredCard/2.jpg"
              name={
                <>
                  Fresh <br />
                  Snacks & Sweets
                </>
              }
              discount="20"
            />
            <ColoredCard
              image="./coloredCard/3.jpg"
              name={
                <>
                  Fresh & healthy <br />
                  Organic Fruits
                </>
              }
              discount="35"
            />
          </StyledCard>
        </Row>
      </Container>
    </StyledColoredProducts>
  );
};

export default ColoredProducts;
