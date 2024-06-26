import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "account" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.6rem;
    `}
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.6rem;
      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid #e1e1e1;
      // border-radius: var(--border-radius-md);
    `}
    ${(props) =>
    props.type === "full" &&
    css`
      padding: 2.4rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.6rem;
      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid #e1e1e1;
      // border-radius: var(--border-radius-md);
    `}
    ${(props) =>
    props.type === "auth" &&
    css`
      padding: 2.4rem;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.6rem;
      margin: auto;
      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid #e1e1e1;
      // border-radius: var(--border-radius-md);
    `}
  ${(props) =>
    props.type === "modal" &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;

      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};
export default Form;
