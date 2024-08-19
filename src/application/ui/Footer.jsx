import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Row from "./Row";
import Heading from "./Heading";
import StyledLink from "./StyledLink";
import Logo from "./Logo";
import Description from "./Description";
import IconLink from "./IconLink";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

import ButtonIcon from "./ButtonIcon";
import FooterPhotos from "./FooterPhotos";
import FooterIcons from "./FooterIcons";
import Input from "./Input";

const StyledFooter = styled.footer`
  background-color: #f7f7f8;
  border-top: 1px solid #e9e9e9;
  padding: 10rem 0 0 0;
`;
const Footer1 = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 10rem;

  & a:first-of-type {
    align-items: start;

    & button {
      padding-top: 0.4rem;
    }
  }
`;
const Footer2 = styled.div`
  padding: 2rem 0;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin: auto;
  letter-spacing: 0.3px;
  color: var(--color-primary);
`;
const Span = styled.span`
  color: var(--color-green-400);
  /* gap: 1rem; */
`;
const StyledInputDiv = styled.div`
  position: relative;
  display: flex;
  margin-top: 0.6rem;
`;
const IconSpan = styled.span`
  position: absolute;
  top: 50%; /* Center icon vertically */
  transform: translateY(-50%); /* Adjust vertical alignment if needed */
  right: 1.2rem;
  font-size: 1.5rem !important;
  height: 1.5rem;

  & svg {
    font-size: 1.8rem;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <Footer1>
        <Container>
          <Row>
            <Row type="vertical">
              <Logo />
              <Description>
                Carrot is the biggest market of grocery products. Get
                <br /> your daily needs from our store.
              </Description>
              <IconLink>
                <ButtonIcon>
                  <HiOutlineLocationMarker color="#64b496" />
                </ButtonIcon>
                <StyledLink>
                  51 Green St.Huntington ohaio beach ontario, NY
                  <br /> 11746 KY 4783, USA.
                </StyledLink>
              </IconLink>
              <IconLink>
                <ButtonIcon>
                  <HiOutlineMail color="#64b496" />
                </ButtonIcon>
                <StyledLink>example@email.com</StyledLink>
              </IconLink>
              <IconLink>
                <ButtonIcon>
                  <IoCallOutline color="#64b496" />
                </ButtonIcon>
                <StyledLink>+91 123 4567890</StyledLink>
              </IconLink>
              {/* <IconLink
              position="footer"
              icon={<HiOutlineLocationMarker />}
              name="51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA."
            />
            <IconLink icon={<HiOutlineMail />} name="example@email.com" />
            <IconLink icon={<IoCallOutline />} name="+91 123 4567890" /> */}
            </Row>
            <Row type="vertical">
              <Heading as="h4">Company</Heading>
              <StyledLink>About Us</StyledLink>
              <StyledLink>Delivery Information</StyledLink>
              <StyledLink>Privacy Policy</StyledLink>
              <StyledLink>Terms & Conditions</StyledLink>
              <StyledLink>contact Us</StyledLink>
              <StyledLink>Support Center</StyledLink>
            </Row>
            <Row type="vertical">
              <Heading as="h4">Category</Heading>
              <StyledLink>Dairy & Bakery</StyledLink>
              <StyledLink>Fruits & Vegetable</StyledLink>
              <StyledLink>Snack & Spice</StyledLink>
              <StyledLink>Juice & Drinks</StyledLink>
              <StyledLink>Chicken & Meat</StyledLink>
              <StyledLink>Fast Food</StyledLink>
            </Row>
            <Row type="vertical">
              <Heading as="h4">Subscribe Our Newsletter</Heading>
              <StyledInputDiv>
                <Input placeholder="Search here..." />
                <IconSpan>
                  <FaTelegramPlane />
                </IconSpan>
              </StyledInputDiv>
              <FooterIcons />
              <FooterPhotos />
            </Row>
          </Row>
        </Container>
      </Footer1>
      <Footer2>
        <Container>
          <Row>
            <P>
              © 2024 <Span>Carrot</Span>, All rights reserved.
            </P>
          </Row>
        </Container>
      </Footer2>
    </StyledFooter>
  );
};

export default Footer;
