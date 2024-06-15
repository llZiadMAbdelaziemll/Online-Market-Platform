import styled, { css } from "styled-components";

const Small = styled.small`
  color: #777;
  font-size: 13px;

  letter-spacing: 0.03rem;
  ${(props) =>
    props.type === "price" &&
    css`
      text-decoration: line-through;
    `}
`;

export default Small;
