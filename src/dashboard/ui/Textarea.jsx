import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-200);
  border-radius: 5px;
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
  color: var(--color-grey-500);
  &:focus {
    outline: 1px solid var(--color-grey-200) !important;
  }
`;

export default Textarea;
