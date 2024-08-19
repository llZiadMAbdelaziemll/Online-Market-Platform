import React from "react";
import styled from "styled-components";
import StyledLinkButton from "../../ui/StyledLinkButton";

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
  & a {
    margin-top: 1rem;
  }
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

const NewCard = () => {
  return (
    <StyledNewCard>
      <Img src="./popular/product-banner.jpg" />
      <Content>
        <Name>Juicy</Name>
        <Category>Fruits</Category>
        <Span>100% Natural</Span>
        <div>
          <StyledLinkButton to="/shop">Shop Now</StyledLinkButton>
        </div>
      </Content>
    </StyledNewCard>
  );
};

export default NewCard;
