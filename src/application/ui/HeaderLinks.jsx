import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../features/auth/useUser";
import { useLogout } from "../features/auth/useLogout";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const StyledLink = styled(NavLink)`
  position: relative;

  padding: 1.1rem 0.8rem;

  font-size: 1.4rem;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 0.3s;
  color: var(--color-primary);
  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    visibility: hidden;
    transition: 0.3s;
    background-color: var(--color-green-400);
  }
  &:hover:after {
    color: black;
    visibility: visible;
    width: 100%;
  }
`;

const HeaderLinks = () => {
  const { user, isAuthenticated } = useUser();
  const { logout, isLoading: isLoggingOut } = useLogout();
  return (
    <Nav>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/shop">Shop</StyledLink>
      <StyledLink to="/aboutus">About Us</StyledLink>
      <StyledLink to="/contactus">Contact Us</StyledLink>
      <StyledLink to="/policy">Policy</StyledLink>

      {!isAuthenticated ? (
        <>
          <StyledLink to="/login">Log In</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </>
      ) : (
        <>
          {user?.user_metadata?.role === "buyer" || (
            <StyledLink to="/dashboard">DASHBOARD</StyledLink>
          )}
          <StyledLink onClick={() => logout()} disabled={isLoggingOut}>
            Log out
          </StyledLink>
        </>
      )}
    </Nav>
  );
};

export default HeaderLinks;
