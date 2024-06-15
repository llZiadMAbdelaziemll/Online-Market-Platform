import styled, { css } from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    width: 300px;
    height: 300px;
    border: 2px dashed var(--color-grey-200);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-grey-200);
    }

    /* font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
    } */
  }
`;

export default FileInput;
