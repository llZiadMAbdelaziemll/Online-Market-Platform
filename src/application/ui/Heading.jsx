import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-family: "Manrope", sans-serif;

      font-size: 5.5rem;
      font-weight: 800;
      line-height: 6.8rem;
      margin-bottom: 2.5rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-family: "Manrope", sans-serif;
      font-size: 3.2rem;
      font-weight: 600;
      color: #2b2b2d;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-family: "Manrope", sans-serif;

      font-size: 2.4rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.8rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: capitalize;
    `} /* line-height: 1.4; */
  /* padding-left: 13rem; */
  letter-spacing: 0.1px;
  color: #2b2b2d;
`;

export default Heading;
