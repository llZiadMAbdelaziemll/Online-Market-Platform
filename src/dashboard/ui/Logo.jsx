import styled from "styled-components";
import { useDarkMode } from "../../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  padding: 4rem 0;
`;

const Img = styled.img`
  height: 5rem;
  width: 50%;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/full-logo.png" : "/logo.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
