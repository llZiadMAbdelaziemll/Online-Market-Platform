import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiArrowRightOnRectangle, HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <DarkModeToggle />
      </li>
      <li onClick={() => navigate("/home")}>
        <ButtonIcon>
          <HiArrowRightOnRectangle />
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
