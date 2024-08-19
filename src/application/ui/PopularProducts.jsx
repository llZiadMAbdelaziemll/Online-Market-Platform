import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Row from "./Row";
import BasicCard from "./BasicCard";
import NewCard from "../features/home/NewCard";
import { useProducts } from "../../dashboard/features/products/useProducts";
import CategoriesFilterOperations from "../features/home/CategoriesFilterOperations";
import { useSearchParams } from "react-router-dom";
import Heading from "./Heading";
import Description from "./Description";
const StyledPopularProducts = styled.section`
  margin-bottom: 10rem;
  & div.alignedTopRow {
    align-items: start;
    justify-content: space-between;
    gap: 4rem;
  }
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

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  min-width: 30.6rem;
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.4rem;
  min-width: 100rem;
`;

const PopularProducts = () => {
  const { products } = useProducts();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("category") || "all";

  let filteredProducts;
  if (filterValue === "all") filteredProducts = products;
  if (filterValue === "asian cuisine")
    filteredProducts = products.filter(
      (product) => product.category === "asian cuisine"
    );

  if (filterValue === "italian cuisine")
    filteredProducts = products.filter(
      (product) => product.category === "italian cuisine"
    );
  if (filterValue === "beverages")
    filteredProducts = products.filter(
      (product) => product.category === "beverages"
    );
  if (filterValue === "soups & stews")
    filteredProducts = products.filter(
      (product) => product.category === "soups & stews"
    );
  return (
    <StyledPopularProducts>
      <Container>
        <Row>
          <SectionHeader>
            <Heading as="h2">Popular Products</Heading>

            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore lacus vel facilisis.
            </Description>
          </SectionHeader>
        </Row>
        <Row className="alignedTopRow">
          <LeftSide>
            <CategoriesFilterOperations />
            <NewCard />
          </LeftSide>
          <RightSide>
            {filteredProducts?.slice(0, 8).map((product) => {
              return (
                <BasicCard key={product.id} product={product} place="home" />
              );
            })}
          </RightSide>
        </Row>
      </Container>
    </StyledPopularProducts>
  );
};

export default PopularProducts;
