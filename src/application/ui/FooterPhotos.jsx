import React from "react";
import styled from "styled-components";

const StyledFooterPhotos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Img = styled.img`
  width: 7.36rem;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
`;
const FooterPhotos = () => {
  return (
    <StyledFooterPhotos>
      <Img src="./footer/1.jpg" alt="" />
      <Img src="./footer/2.jpg" alt="" />
      <Img src="./footer/3.jpg" alt="" />
      <Img src="./footer/4.jpg" alt="" />
      <Img src="./footer/5.jpg" alt="" />
    </StyledFooterPhotos>
  );
};

export default FooterPhotos;
