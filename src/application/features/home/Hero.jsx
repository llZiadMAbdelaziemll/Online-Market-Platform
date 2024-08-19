import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import StyledLinkButton from "../../ui/StyledLinkButton";

const Content = styled.div`
  position: absolute;
  left: 8.84rem;
  top: 14rem;
  z-index: 2;

  & a {
    margin-top: 3rem;
  }
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-bottom: 2rem;
`;
const Span = styled.span`
  color: var(--color-green-400);
  font-weight: bold;
  border-bottom: 2px solid var(--color-green-400);
  font-size: 2rem;
`;
const P = styled.p`
  font-size: 1.5rem;
  color: #7a7a7a;
  margin-bottom: 0;
  line-height: 1.75;
  letter-spacing: 0.5px;
`;
const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 3rem;
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
const Hero = () => {
  return (
    <main>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner  ">
          <div className="carousel-item active p-relative">
            <img
              src="./hero/banner-2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <Content>
              <Tag>
                <Span>100%</Span>
                <Heading as="h5">Organic Fruits</Heading>
              </Tag>

              <Heading as="h1">
                Explore fresh &<br /> juicy fruits.
              </Heading>
              <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                <br />
                reiciendis beatae consequuntur.
              </P>
              <StyledLinkButton to="/shop">Shop Now</StyledLinkButton>
            </Content>
          </div>
          <div className="carousel-item p-relative">
            <img src="./hero/banner.jpg" className="d-block w-100" alt="..." />
            <Content>
              <Tag>
                <Span>100%</Span>
                <Heading as="h5">Organic Vegetables</Heading>
              </Tag>

              <Heading as="h1">
                The best way to
                <br /> stuff your wallet.
              </Heading>
              <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                <br />
                reiciendis beatae consequuntur.
              </P>
              <StyledLinkButton to="/shop">Shop Now</StyledLinkButton>
            </Content>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
