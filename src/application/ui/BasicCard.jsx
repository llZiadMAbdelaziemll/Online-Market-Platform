import React, { useState } from "react";

import styled from "styled-components";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegUser, FaRegHeart, FaRegEye } from "react-icons/fa";
import Small from "./Small";
import { formatCurrency } from "../utils/helpers";
import StarRating from "../utils/StarRating";
import ReactImageZoom from "react-image-zoom";
const TopHalf = styled.div`
  position: relative;
`;

const ImageDiv = styled.div`
  width: 19.8rem;
  height: 19.8rem;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
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
const SidedIcons = styled.div`
  position: absolute;
  right: -3rem;
  top: 0;
  transition: 0.5s ease-in-out;

  & ${Icon}:first-child {
    top: 1rem;
  }
  & ${Icon}:last-child {
    top: 5.2rem;
  }
  & svg {
    color: black;
    cursor: pointer;
  }
`;
const StyledBasicCard = styled.div`
  width: 223.5px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
  gap: 2.2rem;
  padding: 1.2rem;
  border: 1px solid #e9e9e9;
  background-color: #fff;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  &:hover ${SidedIcons} {
    right: 3rem;
  }
`;

const BotHalf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;
const Description = styled.h5`
  font-size: 1.5rem;
  font-weight: 500;
  color: #2b2b2d;
  letter-spacing: 0.03rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: var(--color-green-400);
  }
`;

const Prices = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Price = styled.span`
  color: var(--color-green-400);
  font-size: 1.6rem;
  font-weight: 700;
`;
const BasicCard = () => {
  const [userRating, setUserRating] = useState("");

  return (
    <StyledBasicCard>
      <TopHalf>
        <ImageDiv>
          {/* <Img src="./products/1.jpg" /> */}
          <ReactImageZoom
            width={198}
            height={198}
            zoomWidth={-100}
            zoomPosition="original"
            img="./products/1.jpg"
          />
        </ImageDiv>
        <SidedIcons>
          <Icon>
            <FaRegHeart />
          </Icon>
          <Icon>
            <FaRegEye />
          </Icon>
        </SidedIcons>
        <Icon>
          <RiShoppingBagLine />
        </Icon>
      </TopHalf>
      <BotHalf>
        <Small>Snacks</Small>
        <StarRating size={15} onSetRating={setUserRating} color="#f5885f" />
        <Description>Fresh organic villa farm lomon 500gm pack</Description>
        <Prices>
          <Price>{formatCurrency(50)}</Price>{" "}
          <Small type="price">{formatCurrency(50)}</Small>
        </Prices>
      </BotHalf>
    </StyledBasicCard>
  );
};

export default BasicCard;
