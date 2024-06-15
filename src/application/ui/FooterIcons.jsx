import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  RiTwitterXLine,
  RiFacebookLine,
  RiDribbbleFill,
  RiInstagramLine,
} from "react-icons/ri";

const List = styled.ul`
  list-style: none;
  display: inline-block;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 1rem 0;
`;
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.7rem;
  text-align: center;
  height: 3.4rem !important;
  color: black;
  background-color: var(--color-green-0);
  border-radius: var(--border-radius-sm);
  border: 1px solid #e1dfdf;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--color-green-400);
  }
`;
const FooterIcons = () => {
  return (
    <List>
      <li>
        <StyledLink>
          <RiFacebookLine />
        </StyledLink>
      </li>
      <li>
        <StyledLink>
          <RiTwitterXLine />
        </StyledLink>
      </li>
      <li>
        <StyledLink>
          <RiDribbbleFill />
        </StyledLink>
      </li>
      <li>
        <StyledLink>
          <RiInstagramLine />
        </StyledLink>
      </li>
    </List>
  );
};

export default FooterIcons;
