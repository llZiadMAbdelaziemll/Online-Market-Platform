import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Logo from "./Logo";
import Row from "./Row";
import HeaderMenus from "./HeaderMenus";
import HeaderLinks from "./HeaderLinks";
import IconLink from "./IconLink";
import { IoCallOutline } from "react-icons/io5";

const StyledHeader = styled.header``;
// const BorderDiv = styled.div`
//   padding: 2rem 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   &:first-child {
//     border-bottom: 1px solid var(--color-grey-400);
//   }
// `;
const StyledHeaderOne = styled.div`
  padding: 2rem 0;

  border-bottom: 1px solid #e9e9e9;
`;
const StyledHeaderTwo = styled.div`
  padding: 0.6rem 0;
`;
const Header = () => {
  return (
    <StyledHeader>
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
            <IconLink icon={<IoCallOutline />} name="+123 ( 456 ) ( 7890 )" />
          </Row>
        </StyledHeaderTwo>
      </Container>
    </StyledHeader>
  );
};

export default Header;
