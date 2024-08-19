import { NavLink } from "react-router-dom";
import styled from "styled-components";

import {
  RiFileList2Line,
  RiAddCircleLine,
  RiHome3Line,
  RiSettings4Line,
} from "react-icons/ri";
import { TbCategoryPlus } from "react-icons/tb";

// import { useUser } from "../features/authentication/useUser";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-400);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-500);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-500);
  }
`;

function MainNav() {
  // const { user } = useUser();
  // const userRole = user?.user_metadata?.role;
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="dashboard">
            <RiHome3Line />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="dashboardproducts">
            <RiFileList2Line />
            <span>Products</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="addproduct">
            <RiAddCircleLine />
            <span>Add Product</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="addcategory">
            <TbCategoryPlus />
            <span>Add Category</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="addsubcategory">
            <TbCategoryPlus />
            <span>Add Sub Category</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
