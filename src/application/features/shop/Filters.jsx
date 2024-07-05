import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../../ui/Checkbox";
import { useCategories } from "../../../dashboard/features/categories/useCategories";
import Heading from "../../ui/Heading";
import CheckBoxFilter from "../../ui/CheckBoxFilter";
import CategoriesFilterOperations from "./CategoriesFilterOperations";
import ColorFilterOperations from "./ColorFilterOperations";
import PriceFilter from "./PriceFilter";
import { useProducts } from "../../../dashboard/features/products/useProducts";
import TagsFilterOperations from "./TagsFilterOperations";

const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const Single = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & h5 {
    padding-bottom: 1rem;
    border-bottom: 1px solid #e9e9e9;
  }

  &:last-child div {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.9rem;

    & button {
      border-radius: 5px;
      font-size: 1.4rem;
      font-weight: 400;
      color: #7a7a7a;
      border: 1px solid #e9e9e9;
      text-decoration: none;
      text-transform: capitalize;
      &:hover {
        background-color: var(--color-green-400);
        color: var(--color-green-0);
      }
      &.active {
        background-color: var(--color-green-400);
        color: var(--color-green-0);
      }
      & svg {
        display: none !important;
      }
    }
  }
`;
export default function Filters() {
  return (
    <StyledFilters>
      <Single>
        <Heading as="h5">Categories</Heading>
        <CategoriesFilterOperations />
      </Single>
      <Single>
        <Heading as="h5">Price</Heading>
        <PriceFilter />
      </Single>
      <Single>
        <Heading as="h5">Colors</Heading>
        <ColorFilterOperations />
      </Single>

      <Single>
        <Heading as="h5">Tags</Heading>
        <TagsFilterOperations />
      </Single>
    </StyledFilters>
  );
}
