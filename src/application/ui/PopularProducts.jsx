import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Row from "./Row";
import SectionHeader from "./SectionHeader";
import BasicCard from "./BasicCard";
import NewCard from "../features/home/NewCard";
import { useProducts } from "../../dashboard/features/products/useProducts";
import CategoriesFilterOperations from "../features/home/CategoriesFilterOperations";
import { useSearchParams } from "react-router-dom";
const StyledPopularProducts = styled.section`
  margin-bottom: 10rem;
  & div.alignedTopRow {
    align-items: start;
    justify-content: space-between;
    gap: 4rem;
  }
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
  if (filterValue === "electronics")
    filteredProducts = products.filter(
      (product) => product.category === "electronics"
    );

  if (filterValue === "clothing")
    filteredProducts = products.filter(
      (product) => product.category === "clothing"
    );
  if (filterValue === "books")
    filteredProducts = products.filter(
      (product) => product.category === "books"
    );
  if (filterValue === "sports")
    filteredProducts = products.filter(
      (product) => product.category === "sports"
    );
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
