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
  const { products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const prices = products?.map((p) => p.price).sort((a, b) => a - b);

  const minPrice = 0;
  const maxPrice = prices?.at(prices.length - 1) || 200;

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handleSliderChange = (value) => {
    setPriceRange(value);

    if (value[0] === minPrice && value[1] === maxPrice) {
      searchParams.delete("minPrice");
      searchParams.delete("maxPrice");
    } else {
      searchParams.set("minPrice", value[0]);
      searchParams.set("maxPrice", value[1]);
    }

    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      <Slider
        range
        min={minPrice}
        max={maxPrice}
        value={priceRange}
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
