import React from "react";
import styled from "styled-components";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";

import IconLink from "./IconLink";
import { useUser } from "../features/auth/useUser";
import ButtonIcon from "./ButtonIcon";

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 0;
  color: var(--color-primary);
`;

const HeaderMenus = () => {
  const { user, isAuthenticated } = useUser();
  console.log(user);
  return (
    <HeaderList>
      <li>
        <IconLink to={`${!isAuthenticated ? "/login" : "/wishlist"}`}>
          <ButtonIcon>
            <FaRegHeart />
          </ButtonIcon>
          <span>wishlist</span>
        </IconLink>
      </li>
      <li>
        <IconLink to={`${!isAuthenticated ? "/login" : "/cart"}`}>
          <ButtonIcon>
            <HiOutlineShoppingCart />
          </ButtonIcon>
          <span>cart</span>
        </IconLink>
      </li>
    </HeaderList>
  );
};

export default HeaderMenus;
