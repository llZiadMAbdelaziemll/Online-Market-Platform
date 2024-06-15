import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 11.5rem;
`;
const Logo = () => {
  return <Img src="/logo.png" alt="logo" />;
};

export default Logo;
