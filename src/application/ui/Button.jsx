import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  display: inline-block;
  font-family: "Manrope", sans-serif;
  margin-top: 0.8rem;
  padding: 0.8rem 2.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: capitalize;
  background-color: var(--color-green-400);
  color: #fff;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-green-400);

  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
    border: 1px solid var(--color-green-0);
  }
`;

export default Button;
