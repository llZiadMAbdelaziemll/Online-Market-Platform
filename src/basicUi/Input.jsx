import styled, { css } from "styled-components";

const Input = styled.input`
  ${(props) =>
    props.inputType === "regular" &&
    css`
      width: 100%;

      height: 4rem;
      justify-content: center;
    `}
  color:var(--color-grey-500);
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);

  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  ${(props) =>
    props.inputType === "modal" &&
    css`
      width: 100%;
    `}
  &:focus {
    outline: 1px solid var(--color-grey-100) !important;
  }
`;
Input.defaultProps = {
  inputType: "regular",
};
export default Input;
