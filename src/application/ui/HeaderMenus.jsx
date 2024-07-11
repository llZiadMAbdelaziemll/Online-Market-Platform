import React from "react";
import styled from "styled-components";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";

import IconLink from "./IconLink";
import { useUser } from "../features/auth/useUser";

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 0;
  color: var(--color-primary);
`;

const HeaderMenus = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <HeaderList>
      <li>
        <IconLink to="/cart" icon={<FaRegUser />} name="account" />
      </li>
      {user?.app_metadata?.role === "buyer" || (
        <>
          <li>
            <IconLink to="/wishlist" icon={<FaRegHeart />} name="wishlist" />
          </li>
          <li>
            <IconLink to="/cart" icon={<HiOutlineShoppingCart />} name="cart" />
          </li>
        </>
      )}
    </HeaderList>
  );
};

export default HeaderMenus;
