import React from "react";
import styled, { css } from "styled-components";

const Description = styled.p`
  color: #777;
  font-size: 14px;
  ${(props) =>
    props.type === "topic" &&
    css`
      margin-top: 0.6rem;
      letter-spacing: 0.3px;
      line-height: 1.9;
    `}
  ${(props) =>
    props.type === "semiDescription" &&
    css`
      margin-top: 0;
      letter-spacing: 0.2px;
      line-height: 1.5;
    `}
`;
Description.defaultProps = {
  type: "topic",
};
export default Description;
