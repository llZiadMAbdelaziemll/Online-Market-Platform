import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../../dashboard/features/products/useProducts";
import styled from "styled-components";
import Heading from "../../ui/Heading";

const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  & div:last-child {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #7a7a7a;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0;

    & p {
      font-size: 1.6rem;
      font-weight: 600;
      color: #000;
      margin-bottom: 0;
    }
  }
`;
export default function PriceFilter() {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { products } = useProducts();
  const prices = products
    ?.map((product) => product.price)
    .sort((a, b) => a - b);

  console.log(prices);
  const handleSliderChange = (value) => {
    setPriceRange(value);
    searchParams.set("minPrice", value[0]);
    searchParams.set("maxPrice", value[1]);
    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      <Slider
        range
        min={prices?.at(0)}
        max={prices?.at(prices?.length - 1)}
        defaultValue={priceRange}
        onChange={handleSliderChange}
        trackStyle={{ backgroundColor: "#64b496" }}
        railStyle={{ backgroundColor: "#e9e9e9" }}
        handleStyle={{
          borderColor: "#64b496",

          backgroundColor: "#64b496",
        }}
      />
      <div>
        <p>Price :</p> {priceRange[0]} - {priceRange[1]}
      </div>
    </StyledFilter>
  );
}
