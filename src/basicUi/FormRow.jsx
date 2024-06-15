import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: flex-start;
  justify-content: center;
  grid-template-columns: 1fr;
  padding-bottom: 0.7rem;
  gap: 0.6rem;
  width: 100%;
  ${(props) =>
    props.size === "layout" &&
    css`
      grid-template-columns: 36.7rem 72.5rem;
      /*  */
    `}
  ${(props) =>
    props.size === "half" &&
    css`
      grid-template-columns: 1fr 1fr;
    `}
    ${(props) =>
    props.size === "one-third" &&
    css`
      grid-template-columns: 1fr 1fr 1fr;
    `}
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    // border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  color: #999;
  font-size: 1.3rem;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ size = "full", error, children, label }) {
  return (
    <StyledFormRow size={size}>
      {label && <Label htmlFor={children?.props?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
