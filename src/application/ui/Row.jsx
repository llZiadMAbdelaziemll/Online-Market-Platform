import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.2rem;
    `}
    ${(props) =>
    props.position === "header" &&
    css`
      &:first-child {
        padding: 2rem 0;

        border-bottom: 1px solid var(--color-grey-50);
      }
      &:last-child {
        padding: 0.6rem 0;
      }
    `}
`;

Row.defaultProps = {
  type: "horizontal",
};

export default Row;
