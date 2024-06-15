import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Row from "./Row";
import styled from "styled-components";
import Heading from "./Heading";

const StyledCrumb = styled.div`
  padding: 2.5rem 0;
  background-color: var(--color-green-100);
`;
const P = styled.div`
  font-size: 1.4rem;
  color: var(--color-grey-400);
`;
const StyledLink = styled(Link)`
  color: var(--color-green-500);
`;
const BreadCrumb = ({ title }) => {
  return (
    <StyledCrumb>
      <Container>
        <Row>
          <Heading as="h4">{title}</Heading>
          <P>
            <StyledLink to="/">Home &nbsp;</StyledLink>/ {title}
          </P>
        </Row>
      </Container>
    </StyledCrumb>
  );
};

export default BreadCrumb;
