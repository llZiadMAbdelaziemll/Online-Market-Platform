import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0 0.6rem 0 0;
  /* border-radius: var(--border-radius-sm); */
  transition: all 0.2s;

  /* &:hover {
    color: var(--color-green-400);
  } */

  & svg {
    width: 2.1rem;
    height: 1.7rem;
    /* fill: #000; */
  }
`;

export default ButtonIcon;
