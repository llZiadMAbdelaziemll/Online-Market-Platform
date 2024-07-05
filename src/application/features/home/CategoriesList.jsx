import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCategoriesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 44rem;
  /* align-items: center; */
  gap: 0.45rem;
`;

const H5 = styled.h5`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-primary);
  transition: 0.1s ease-in-out;
`;
const ItemsCount = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: #7a7a7a;
`;
const StyledLink = styled(Link)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  background-color: #f7f7f8;
  border-radius: var(--border-radius-sm);
  border: 1px solid #e9e9e9;
  padding: 1.8rem 0 1.4rem 0;
  &:hover ${H5} {
    color: var(--color-green-400);
  }
`;
const ViewMore = styled(Link)`
  font-family: "Manrope", sans-serif;
  color: var(--color-green-400);
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: capitalize;
`;
const CategoriesList = () => {
  return (
    <StyledCategoriesList>
      <StyledLink>
        <H5 as="h5">Cake & Milk</H5>
        <ItemsCount>(65 items)</ItemsCount>
      </StyledLink>
      <StyledLink>
        <H5 as="h5">Fresh Meat</H5>
        <ItemsCount>(60 items)</ItemsCount>
      </StyledLink>
      <StyledLink>
        <H5 as="h5">Vegetables</H5>
        <ItemsCount>(50 items)</ItemsCount>
      </StyledLink>
      <StyledLink>
        <H5 as="h5">Apple & Mango</H5>
        <ItemsCount>(14 items)</ItemsCount>
      </StyledLink>
      <StyledLink>
        <H5 as="h5">Strawberry</H5>
        <ItemsCount>(68 items)</ItemsCount>
      </StyledLink>
      <StyledLink to="/products">
        <ViewMore to="/products">view more</ViewMore>
      </StyledLink>
    </StyledCategoriesList>
  );
};

export default CategoriesList;
