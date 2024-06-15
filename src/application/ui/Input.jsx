import styled, { css } from "styled-components";

const Input = styled.input`
  width: 100%;
  background-color: #fff;
  border-radius: var(--border-radius-sm);
  padding: 1rem 1.7rem;
  border: 1px solid #e9e9e9;
  outline: none;
  font-size: 1.6rem;
  color: var(--color-primary);

  &::placeholder {
    font-size: 1.35rem;
  }
  &:focus {
    outline: 1px solid #d4d6d8 !important;
  }
`;

export default Input;
