import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Logo from "./Logo";
import Row from "./Row";
import HeaderMenus from "./HeaderMenus";
import HeaderLinks from "./HeaderLinks";
import IconLink from "./IconLink";
import { IoCallOutline } from "react-icons/io5";
import ButtonIcon from "./ButtonIcon";

const StyledHeaderOne = styled.div`
  padding: 2rem 0;

  border-bottom: 1px solid #e9e9e9;
`;
const StyledHeaderTwo = styled.div`
  padding: 0.6rem 0;
`;
const Header = () => {
  return (
    <header>
      <Container>
        <StyledHeaderOne>
          <Row>
            {/* <BorderDiv> */}
            <Logo />
            <HeaderMenus />
            {/* </BorderDiv> */}
          </Row>
        </StyledHeaderOne>
        <StyledHeaderTwo>
          <Row>
            <HeaderLinks />
            <IconLink>
              <ButtonIcon>
                <IoCallOutline />
              </ButtonIcon>
              <span>+123 ( 456 ) ( 7890 )</span>
            </IconLink>
          </Row>
        </StyledHeaderTwo>
      </Container>
    </header>
  );
};

export default Header;
