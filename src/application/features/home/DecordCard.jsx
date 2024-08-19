import React from "react";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import StyledLinkButton from "../../ui/StyledLinkButton";

const StyledDecordCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-sm);
  &::after {
    transition: all 0.3s ease-in-out;
    width: 200px;
    height: 200px;
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    position: absolute;
    top: -8rem;
    left: -4rem;
    z-index: 0;
  }
  &:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 0;

    left: 0;
    top: -1rem;
  }
`;

const Discount = styled.div`
  font-family: "Manrope", sans-serif;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: ; */
  color: #fff;
  z-index: 3;
  padding: 2rem;
`;
const Category = styled.div`
  text-align: center;
  position: absolute;

  bottom: 0;
  left: 0;
  width: 100%;
  padding: 3rem;
  z-index: 5;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.2),
    transparent
  );
  color: white;
  /* background-color: ; */
`;
const H4 = styled.h4`
  display: inline-flex;
  font-size: 5.4rem;
  font-weight: bold;
`;
const Span = styled.span`
  padding: 1.3rem 0 1rem 0.5rem;
`;
const Small = styled.small`
  display: block;
  font-size: 1.9rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.3;
`;
const H5 = styled.h5`
  font-size: 1.9rem;
`;
const Img = styled.img`
  width: 100%;
`;
const DecordCard = () => {
  return (
    <StyledDecordCard>
      <Discount>
        <H4>
          50
          <Span>
            <Small>%</Small>
            <Small>off</Small>
          </Span>
        </H4>
      </Discount>
      <Category>
        <H5 as="h5">Cake</H5>
        <StyledLinkButton>Shop Now</StyledLinkButton>
      </Category>
      <Img src="./categories/4.jpg" alt="" />
    </StyledDecordCard>
  );
};

export default DecordCard;
