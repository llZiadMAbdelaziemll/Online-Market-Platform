import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "account" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-200);
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
      border: 1px solid var(--color-grey-200);
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
      border: 1px solid var(--color-grey-200);
      // border-radius: var(--border-radius-md);
    `}
  ${(props) =>
    props.type === "modal" &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      max-height: 80vh;
      overflow-y: scroll !important;

      &::-webkit-scrollbar {
        display: none;
      }
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};
export default Form;
