import React from "react";
import styled from "styled-components";

import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const StyledNewCard = styled.div`
  position: relative;
  max-height: 50rem;
  max-width: 100%;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  border-radius: var(--border-radius-sm);
`;
const Content = styled.div`
  padding: 80px 20px 20px 20px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;

  top: 0;
  left: 0;
  text-align: left;
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
const Name = styled.h4`
  margin-bottom: 5px;
  font-family: "Manrope", sans-serif;
  font-size: 40px;
  color: #fff;
  font-weight: 300;
  line-height: 1.2;
`;
const Category = styled.h5`
  margin-bottom: 5px;
  font-family: "Manrope", sans-serif;
  text-transform: uppercase;
  font-size: 38px;
  color: #f7e8aa;
  font-weight: 900;
  line-height: 1.2;
`;
const Span = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #fff;
  margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  font-family: "Manrope", sans-serif;

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
const NewCard = () => {
  return (
    <StyledNewCard>
      <Img src="./popular/product-banner.jpg" />
      <Content>
        <Name>Juicy</Name>
        <Category>Fruits</Category>
        <Span>100% Natural</Span>
        <div>
          <StyledLink to="/shop">Shop Now</StyledLink>
        </div>
      </Content>
    </StyledNewCard>
  );
};

export default NewCard;
