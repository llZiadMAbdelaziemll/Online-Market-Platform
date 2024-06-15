import React, { useState } from "react";

import styled from "styled-components";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegUser, FaRegHeart, FaRegEye } from "react-icons/fa";
import Small from "./Small";
import Heading from "./Heading";
import Description from "./Description";
import { formatCurrency } from "../utils/helpers";
import StarRating from "../utils/StarRating";
import ReactImageZoom from "react-image-zoom";

const ImageDiv = styled.div`
  width: 100%;
  position: absolute;
  top: -58px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  &::after {
    width: 121px;
    height: 63px;
    content: "";
    position: absolute;
    bottom: 0px;
    border: 1px solid #e9e9e9;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    border-top: none;
    z-index: 0;
  }
`;
const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  border: 13px solid #fff;
`;
const Icon = styled.div`
  height: 35px;
  width: 35px;
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f7f7f8;
  border: 1px solid #e9e9e9;
  background-color: aliceblue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    color: var(--color-green-400);
    cursor: pointer;
  }
`;

const StyledTestCard = styled.div`
  margin-top: 5rem;
  width: 416px;
  position: relative;

  padding: 65px 15px 20px 15px;
  background-color: #f7f7f8;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  max-width: 310px;
  margin: 10px auto 0 auto;
  text-align: center;
`;

const TestimonialsCard = () => {
  const [userRating, setUserRating] = useState("");

  return (
    <StyledTestCard>
      <ImageDiv>
        <Img src="./testimonials/1.jpg" />
      </ImageDiv>

      <Content>
        <Small>Co Founder</Small>
        <Heading as="h4">Stephen Smith</Heading>
        <Description>
          “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem
          lacus vel facilisis.”
        </Description>
        <StarRating
          type="testimonials"
          size={16}
          onSetRating={setUserRating}
          color="#f5885f"
          defaultRating={4}
        />
      </Content>
    </StyledTestCard>
  );
};

export default TestimonialsCard;
