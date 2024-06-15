import React from "react";
import Container from "../ui/Container";
import Row from "../../basicUi/Row";
import Meta from "../ui/Meta";
import BreadCrumb from "../ui/BreadCrumb";
import RegisterForm from "../features/auth/RegisterForm";
import styled from "styled-components";

const StyledRegister = styled.section`
  height: 100vh;
  padding-top: 15rem;
  /* transform: translateY(-50%); */
`;
const Register = () => {
  return (
    <>
      <Meta title={"Log in"} />
      <BreadCrumb title="Log in" />
      <StyledRegister>
        <Container>
          <Row>
            <RegisterForm />
          </Row>
        </Container>
      </StyledRegister>
    </>
  );
};

export default Register;
