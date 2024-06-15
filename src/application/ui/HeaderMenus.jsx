import React from "react";
import styled from "styled-components";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";

import IconLink from "./IconLink";

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 0;
  color: var(--color-primary);
`;

const HeaderMenus = () => {
  return (
    <HeaderList>
      <li>
        <IconLink icon={<FaRegUser />} name="account" />
      </li>
      <li>
        <IconLink icon={<FaRegHeart />} name="wishlist" />
      </li>
      <li>
        <IconLink icon={<HiOutlineShoppingCart />} name="cart" />
      </li>
    </HeaderList>
  );
};

export default HeaderMenus;
