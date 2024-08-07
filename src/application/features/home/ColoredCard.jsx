import React from "react";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Description from "../../ui/Description";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const StyledColoredCard = styled.div`
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  border-radius: var(--border-radius-sm);
`;
const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  /* padding: 24px; */
  top: 0;
  left: 0;
  right: 0;
  text-align: left;
  height: 100%;
  padding: 2.4rem;
`;
const H5 = styled.h5`
  font-family: "Manrope", sans-serif;
  text-transform: capitalize;
  color: #2b2b2d;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  text-transform: capitalize;
  letter-spacing: 0.3px;
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Span = styled.span`
  color: var(--color-green-400);
  font-weight: bold;
  font-size: 2rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  font-family: "Manrope", sans-serif;
  margin-top: 0.8rem;
  padding: 0.8rem 2.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: capitalize;
  background-color: var(--color-green-400);
  color: #fff;
  border-radius: var(--border-radius-sm);

  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
  }
`;
const ColoredCard = ({ image, name, discount }) => {
  return (
    <StyledColoredCard>
      <Img src={image} />
      <Content>
        <H5>{name}</H5>
        <Tag>
          <Span>{discount}%</Span>
          <Description type="semiDescription">off on first order</Description>
        </Tag>
        <div>
          <StyledLink to="/shop">Shop Now</StyledLink>
        </div>
      </Content>
    </StyledColoredCard>
  );
};

export default ColoredCard;
