import React from "react";
import Container from "../ui/Container";
import Meta from "../ui/Meta";
import BreadCrumb from "../ui/BreadCrumb";
import Row from "../../basicUi/Row";

import LoginForm from "../features/auth/LoginForm";
import styled from "styled-components";

const StyledLogin = styled.section`
  height: 100vh;
  padding-top: 15rem;
  /* transform: translateY(-50%); */
`;
const Login = () => {
  return (
    <>
      <Meta title={"Log in"} />
      <BreadCrumb title="Log in" />
      <StyledLogin>
        <Container>
          <Row>
            <LoginForm />
          </Row>
        </Container>
      </StyledLogin>
    </>
  );
};

export default Login;
