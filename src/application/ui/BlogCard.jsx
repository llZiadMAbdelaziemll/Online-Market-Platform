import React from "react";

import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

import Heading from "./Heading";
import Description from "./Description";
import { Link } from "react-router-dom";
const TopHalf = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 274.475px;
`;
const Img = styled.img`
  width: 100%;
`;

const StyledBlogCard = styled.div`
  width: 414px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;

  border: 1px solid #e9e9e9;
  background-color: #fff;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
`;

const BotHalf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  position: relative;
`;
const StyledMore = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-green-400);
  font-family: "Manrope", sans-serif;

  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 0.5rem;
  & svg {
    font-size: 1.8rem;
  }
`;
const StyledDate = styled.div`
  position: absolute;
  padding: 1.2rem 1.4rem;
  bottom: 12px;
  right: 12px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #fff;
  opacity: 0.95;
`;
const StyledNumber = styled.span`
  font-family: "Manrope", sans-serif;
  font-size: 2.3rem;
  font-weight: bold;
  line-height: 1.1;
  padding: 0 2px;
`;
const Month = styled.span`
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;
const BlogCard = () => {
  return (
    <StyledBlogCard>
      <TopHalf>
        <Description>By Admin | Snacks</Description>
        <Heading as="h4">
          Urna pretium elit mauris cursus at elit Vestibulum.
        </Heading>
        <StyledMore>
          Read More <FaLongArrowAltRight />
        </StyledMore>
      </TopHalf>
      <BotHalf>
        <ImageDiv>
          <Img src="./blogs/2.jpg" />
        </ImageDiv>
        <StyledDate>
          <StyledNumber> 22 </StyledNumber>
          <Month>jan</Month>
        </StyledDate>
      </BotHalf>
    </StyledBlogCard>
  );
};

export default BlogCard;
